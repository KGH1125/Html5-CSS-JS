package repositoy;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.CommentVO;
import orm.DatabaseBuilder;

public class CommentDAOImpl implements CommentDAO {
	private static final Logger log = LoggerFactory.getLogger(CommentDAOImpl.class);
	private SqlSession sql;
	private final String NS = "CommentMapper.";
	private int isOK;
	
	public CommentDAOImpl() {
		new DatabaseBuilder();
		sql = DatabaseBuilder.getFactory().openSession();
	}
	@Override
	public int insert(CommentVO cvo) {
		isOK = sql.insert(NS+"in", cvo);
		log.info("->CommentDAOImpl : insert");
		if(isOK>0) {
			sql.commit();
		}
		return isOK;
	}

	@Override
	public List<CommentVO> getList(int bno) {
		log.info("->CommentDAOImpl : getList");
		return sql.selectList(NS+"list",bno);
	}

	@Override
	public int deleteOne(int cno) {
		log.info("->CommentDAOImpl : deleteOne");
		return sql.delete(NS+"delOne",cno);
	}

	@Override
	public int updateOne(CommentVO cvo) {
		log.info("->CommentDAOImpl : updateOne");
		return sql.update(NS+"upOne",cvo);
	}

}
