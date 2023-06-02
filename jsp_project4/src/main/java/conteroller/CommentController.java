package conteroller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.CommentVO;
import service.CommentService;
import service.CommentServiceImpl;

@WebServlet("/cmt/*")
public class CommentController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger log = LoggerFactory.getLogger(CommentController.class);

	private CommentService csv;
	private CommentVO cvo;
	private String u8 = "utf-8";
	int isOK;

	
	public CommentController() {
		csv = new CommentServiceImpl();

	}

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding(u8);
		response.setCharacterEncoding(u8);
		String uri = request.getRequestURI();
		
		log.info(uri);
		String pathUri = uri.substring("/cmt/".length());
		String path = pathUri;
		String pathVar = "";
		if (pathUri.contains("/")) {
			path = pathUri.substring(0, pathUri.lastIndexOf("/"));
			pathVar = pathUri.substring(pathUri.lastIndexOf("/") + 1);
		}
		switch (path) {
		case "post":
			try {
				// js에서 보낸 데이터를 StringBuffer로 읽어들이는 작업
				StringBuffer sb = new StringBuffer();
				String line = "";
				BufferedReader br = request.getReader();
				while ((line = br.readLine()) != null) {
					sb.append(line);
				}
				log.info(">>>>sb : " + sb.toString());
				
				JSONParser parser = new JSONParser();
				JSONObject jsonObj = (JSONObject) parser.parse(sb.toString());
				
				int bno = Integer.parseInt(jsonObj.get("target_bno").toString());
				String writer = jsonObj.get("writer").toString();
				String content = jsonObj.get("content").toString();
				
				cvo = new CommentVO(bno, writer, content);
				isOK = csv.post(cvo);
				log.info(">>>post : " + ((isOK > 0) ? "성공" : "실패"));
				
				PrintWriter out = response.getWriter();
				out.print(isOK);

			} catch (Exception e) {
				log.info(">>>>commet post error");
			}
			break;

		case "list":
			try {
				log.info(">>>controllerLsit진입!");
				int bno = Integer.parseInt(pathVar);
				List<CommentVO> list = csv.getList(bno);

				JSONObject[] jarr = new JSONObject[list.size()];
				JSONArray jlist = new JSONArray();
				for (int i = 0; i < list.size(); i++) {
					jarr[i] = new JSONObject();
					jarr[i].put("cno", list.get(i).getCno());
					jarr[i].put("taget_bno", list.get(i).getTarget_bno());
					jarr[i].put("writer", list.get(i).getWriter());
					jarr[i].put("content", list.get(i).getContent());
					jarr[i].put("reg_date", list.get(i).getReg_date());
					jlist.add(jarr[i]);
				}
				String jsonData = jlist.toString();
				PrintWriter out = response.getWriter();
				out.print(jsonData);

			} catch (Exception e) {
				log.info(">>>>comment list > error");
				e.printStackTrace();
			}

			break;
		
			
		case "remove":
			int cno = Integer.parseInt(pathVar);
			isOK=csv.removeOne(cno);
			log.info(">>>removeOne : " + ((isOK > 0) ? "성공" : "실패"));
			PrintWriter out = response.getWriter();
			out.print(isOK);
			break;
			
		case "edit":
			try {
				StringBuffer sb = new StringBuffer();
				String line = "";
				BufferedReader br = request.getReader();
				
				while ((line = br.readLine()) != null) {
					sb.append(line);
				}
				log.info(">>>>sb : " + sb.toString());
				JSONParser parser = new JSONParser();
				JSONObject jsonObj = (JSONObject) parser.parse(sb.toString());
				
				int cno1 = Integer.parseInt(jsonObj.get("cno").toString());
				String content = jsonObj.get("content").toString();
				
				cvo = new CommentVO();
				cvo.setCno(cno1);
				cvo.setContent(content);
				isOK = csv.editOne(cvo);
				log.info(">>>edit : " + ((isOK > 0) ? "성공" : "실패"));
				
				PrintWriter out1 = response.getWriter();
				out1.print(isOK);
				
			} catch (Exception e) {
				log.info(">>>>comment edit > error");
				e.printStackTrace();
			}
			break;
		}

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
