package repositoy;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import domain.BoardVO;
import domain.PagingVO;
import orm.DatabaseBuilder;

public class BoardDAOImpl implements BoardDAO {
	private static final Logger log = LoggerFactory.getLogger(BoardDAOImpl.class);
	private SqlSession sql;
	private String NS = "BoardMapper.";
	private int isOK;

	public BoardDAOImpl() {
		new DatabaseBuilder();
		sql = DatabaseBuilder.getFactory().openSession();
	}

	@Override
	public List<BoardVO> paglist(PagingVO pgvo) {
		log.info("->BoardDAOImpl : paglist");
		return sql.selectList(NS + "pageList", pgvo);
	}

	@Override
	public int selectTotal(PagingVO pgvo) {
		log.info("->BoardDAOImpl : selectTotal");
		return sql.selectOne(NS + "total", pgvo);
	}

	@Override
	public BoardVO selectOne(BoardVO bvo) {
		log.info("->BoardDAOImpl : selectOne");
		return sql.selectOne(NS + "selectOne", bvo);
	}

	@Override
	public BoardVO updateOne(BoardVO bvo) {
		log.info("->BoardDAOImpl : updateOne");
		isOK = sql.update(NS + "updateOne", bvo);
		System.out.println(isOK);
		if (isOK > 0) {
			sql.commit();
		}
		return sql.selectOne(NS + "selectOne", bvo);
	}

	@Override
	public BoardVO selectOnePlus(BoardVO bvo) {
		log.info("->BoardDAOImpl : selectOnePlus");
		isOK = sql.update(NS + "updateCount", bvo);
		if (isOK > 0) {
			sql.commit();
		}
		return sql.selectOne(NS + "selectOne", bvo);
	}

	@Override
	public int insertOne(BoardVO bvo) {
		log.info("->BoardDAOImpl : insertOne");
		isOK = sql.insert(NS+"insertOne",bvo);
		System.out.println(isOK);
		if(isOK>0) {
			sql.commit();
		}
		return isOK;
	}

	@Override
	public int deleteOne(BoardVO bvo) {
		log.info("->BoardDAOImpl : deleteOne");
		isOK = sql.delete(NS+"delOne",bvo);
		if(isOK>0) {
			sql.commit();
		}
		return isOK;
	}

}
