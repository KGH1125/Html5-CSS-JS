package repositoy;

import java.util.List;

import domain.CommentVO;

public interface CommentDAO {

	int insert(CommentVO cvo);

	List<CommentVO> getList(int bno);

	int deleteOne(int cno);

	int updateOne(CommentVO cvo);

}
