package conteroller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.BoardVO;
import domain.PagingVO;
import handeler.FileHandler;
import handeler.PagingHandler;
import net.coobird.thumbnailator.Thumbnails;
import service.BoardService;
import service.BoardServiceImpl;

@WebServlet("/brd/*")
public class BoardController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = LoggerFactory.getLogger(BoardController.class);

	private RequestDispatcher rdp;
	private BoardService bsv;
	private int isOK;
	private String destPage;
	private BoardVO bvo;
	private BoardVO rbvo;
	private String savePath;
	private String u8 = "utf-8";

	public BoardController() {
		bsv = new BoardServiceImpl();
	}

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding(u8);
		response.setCharacterEncoding(u8);
		response.setContentType(u8);

		String uri = request.getRequestURI();
		String path = uri.substring(uri.lastIndexOf("/") + 1);

		switch (path) {
		case "page":
			try {
				int pageNo = 1;
				int qty = 10;
				String type = "";
				String keyword = "";
				PagingVO pgvo = new PagingVO();
				if (request.getParameter("type") != null) {
					type = request.getParameter("type");
					keyword = request.getParameter("keyword");
					pgvo.setType(type);
					pgvo.setKeyword(keyword);
				}
				if (request.getParameter("pageNo") != null) {
					pageNo = Integer.parseInt(request.getParameter("pageNo"));
					pgvo.setPageNo(pageNo);
				}

				int totCount = bsv.getTotal(pgvo);
				log.info("전체페이지수" + totCount);
				List<BoardVO> list = bsv.getPageList(pgvo);
				PagingHandler ph = new PagingHandler(pgvo, totCount);
				request.setAttribute("pgh", ph);
				request.setAttribute("list", list);
			} catch (Exception e) {
				e.printStackTrace();
			}
			destPage = "/board/list.jsp";
			break;
		case "move_modify":
			bvo = new BoardVO();
			int bno = Integer.parseInt(request.getParameter("bno"));
			bvo.setBno(bno);
			rbvo = new BoardVO();
			rbvo = bsv.selectOne(bvo);
			request.setAttribute("bvo", rbvo);
			destPage = "/board/modify.jsp";
			break;

		case "register":
			try {
				savePath = getServletContext().getRealPath("/_fileUpload");
				log.info(">>>savePath : " + savePath);
				File fileDir = new File(savePath);
				DiskFileItemFactory fileItemFactort = new DiskFileItemFactory();
				fileItemFactort.setRepository(fileDir);
				fileItemFactort.setSizeThreshold(2 * 1024 * 1024);

				ServletFileUpload fileUp = new ServletFileUpload(fileItemFactort);
				List<FileItem> itemList = fileUp.parseRequest(request);
				bvo = new BoardVO();
				String title = "";
				String content = "";
				for (FileItem item : itemList) {
					switch (item.getFieldName()) {
					case "title":
						title = item.getString(u8);
						bvo.setTitle(item.getString(u8));
						break;

					case "writer":
						bvo.setWriter(item.getString(u8));
						break;

					case "content":
						content = item.getString(u8);
						bvo.setContent(item.getString(u8));
						break;

					case "img_file":
						if (item.getSize() > 0) {
							String fileName = item.getName().substring(item.getName().lastIndexOf("/") + 1);
							fileName = System.currentTimeMillis() + "_" + fileName;
							log.info("->fileName : " + fileName);
							File uploadFilePath = new File(fileDir + File.separator + fileName);
							log.info("->실제파일경로" + uploadFilePath);
							try {
								item.write(uploadFilePath);
								bvo.setImg_file(fileName);
								Thumbnails.of(uploadFilePath).size(75, 75)
										.toFile(new File(fileDir + File.separator + "th_" + fileName));
							} catch (Exception e) {
								log.info("->file writer on disk fail 파일라이터 디스크 저장실패");
								e.printStackTrace();
							}
						}
						break;
					}
				}

				if (title.equals("") || content.equals("")) {
					request.setAttribute("isnull", true);
					destPage = "/board/register.jsp";
					break;
				}else {
				isOK = bsv.reg(bvo);
				log.info(">>>register : " + (isOK > 0 ? "성공" : "실패"));
				destPage = "page";
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			break;

		case "edit":
			try {

				savePath = getServletContext().getRealPath("/_fileUpload");
				File fileDir = new File(savePath);
				DiskFileItemFactory fileItemFactort = new DiskFileItemFactory();
				fileItemFactort.setRepository(fileDir);// 파일의 저장위치를 담은 객체 생성
				fileItemFactort.setSizeThreshold(2 * 1024 * 1024);// 파일저장을 위한 임시 메모리 설정 단위:byte(2메가)

				bvo = new BoardVO();
				ServletFileUpload fileUpload = new ServletFileUpload(fileItemFactort);
				List<FileItem> itemList = fileUpload.parseRequest(request);
				String oldFile = null;
				for (FileItem item : itemList) {
					switch (item.getFieldName()) {
					case "bno":
						bvo.setBno(Integer.parseInt(item.getString(u8)));
						break;
					case "title":
						bvo.setTitle(item.getString(u8));
						break;
					case "content":
						bvo.setContent(item.getString(u8));
						break;
					case "oldFile":
						oldFile = item.getString(u8);
						break;
					case "newFile":
						if (item.getSize() > 0) {
							if (oldFile != null) {
								FileHandler fh = new FileHandler();
								isOK = fh.deleteFile(oldFile, savePath);
							}
							// 이름설정 File.separator="/" : 윈도우나 맥의 파일 구분자
							String fileName = item.getName().substring(item.getName().lastIndexOf(File.separator) + 1);
							File uploadFilePath = new File(fileDir + File.separator + fileName);
							try {
								item.write(uploadFilePath);
								bvo.setImg_file(fileName);
								Thumbnails.of(uploadFilePath).size(75, 75)
										.toFile(new File(fileDir + File.separator + "th_" + fileName));
							} catch (Exception e) {
								e.printStackTrace();
							}

						} else {
							bvo.setImg_file(oldFile);
						}
						break;
					case "detail":
						try {
							bvo = new BoardVO();
							bvo.setBno(Integer.parseInt(request.getParameter("bno")));
							rbvo = new BoardVO();
							rbvo = bsv.selectOnePlus(bvo);
							request.setAttribute("bvo", rbvo);
						} catch (Exception e) {
							e.printStackTrace();
						}
						destPage = "/board/detail.jsp";
						break;
					}

				}
				rbvo = new BoardVO();
				rbvo = bsv.editOne(bvo);

				request.setAttribute("bvo", rbvo);

			} catch (Exception e) {
				// TODO: handle exception
			}
			destPage = "/brd/detail";
			break;

		case "detail":
			try {
				bvo = new BoardVO();
				bvo.setBno(Integer.parseInt(request.getParameter("bno")));
				rbvo = new BoardVO();
				rbvo = bsv.selectOnePlus(bvo);
				request.setAttribute("bvo", rbvo);
			} catch (Exception e) {
				e.printStackTrace();
			}
			destPage = "/board/detail.jsp";
			break;

		case "delete":
			try {
				bvo = new BoardVO(Integer.parseInt(request.getParameter("bno")));
				isOK = bsv.delete(bvo);
				log.info(">>>delete : " + (isOK > 0 ? "성공" : "실패"));
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			destPage = "page";
			break;
		}
		rdp = request.getRequestDispatcher(destPage);
		rdp.forward(request, response);
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		service(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		service(request, response);
	}

}
