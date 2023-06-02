package service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.BoardVO;
import domain.PagingVO;
import repositoy.BoardDAO;
import repositoy.BoardDAOImpl;

public class BoardServiceImpl implements BoardService {
	private static final Logger log = LoggerFactory.getLogger(BoardServiceImpl.class);
	public BoardDAO bdao;

	public BoardServiceImpl() {
		bdao = new BoardDAOImpl();
	}

	@Override
	public List<BoardVO> getPageList(PagingVO pgvo) {
		log.info("->BoardServiceImpl : getPageList");
		return bdao.paglist(pgvo);
	}

	@Override
	public int getTotal(PagingVO pgvo) {
		log.info("->BoardServiceImpl : getTotal");
		return bdao.selectTotal(pgvo);
	}

	@Override
	public BoardVO selectOne(BoardVO bvo) {
		log.info("->BoardServiceImpl : selectOne");
		return bdao.selectOne(bvo);
	}

	@Override
	public BoardVO editOne(BoardVO bvo) {
		log.info("->BoardServiceImpl : editOne");
		return bdao.updateOne(bvo);
	}

	@Override
	public BoardVO selectOnePlus(BoardVO bvo) {
		log.info("->BoardServiceImpl : selectOnePlus");
		return bdao.selectOnePlus(bvo);
	}

	@Override
	public int reg(BoardVO bvo) {
		log.info("->BoardServiceImpl : reg");
		return bdao.insertOne(bvo);
	}

	@Override
	public int delete(BoardVO bvo) {
		log.info("->BoardServiceImpl : delete");
		return bdao.deleteOne(bvo);
	}

}
