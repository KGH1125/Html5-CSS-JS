package service;

import java.util.List;

import domain.BoardVO;
import domain.PagingVO;

public interface BoardService {

	List<BoardVO> getPageList(PagingVO pgvo);

	int getTotal(PagingVO pgvo);

	BoardVO selectOne(BoardVO bvo);

	BoardVO editOne(BoardVO bvo);

	BoardVO selectOnePlus(BoardVO bvo);

	int reg(BoardVO bvo);

	int delete(BoardVO bvo);

}
