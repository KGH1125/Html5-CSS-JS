package service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.CommentVO;
import repositoy.CommentDAO;
import repositoy.CommentDAOImpl;

public class CommentServiceImpl implements CommentService {
	private static final Logger log = LoggerFactory.getLogger(CommentServiceImpl.class);

	private CommentDAO cdao;

	public CommentServiceImpl() {
		cdao = new CommentDAOImpl();
	}

	@Override
	public int post(CommentVO cvo) {
		log.info("->CommentServiceImpl : post");
		return cdao.insert(cvo);
	}

	@Override
	public List<CommentVO> getList(int bno) {
		log.info("->CommentServiceImpl : getList");
		return cdao.getList(bno);
	}

	@Override
	public int removeOne(int cno) {
		log.info("->CommentServiceImpl : removeOne");
		return cdao.deleteOne(cno);
	}

	@Override
	public int editOne(CommentVO cvo) {
		log.info("->CommentServiceImpl : editOne");
		return cdao.updateOne(cvo);
	}

}
