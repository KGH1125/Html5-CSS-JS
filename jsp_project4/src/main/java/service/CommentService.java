package service;

import java.util.List;

import domain.CommentVO;

public interface CommentService {

	int post(CommentVO cvo);

	List<CommentVO> getList(int bno);

	int removeOne(int cno);

	int editOne(CommentVO cvo);

}
