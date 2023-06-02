package repositoy;

import java.util.List;

import domain.MemberVO;

public interface MemberDAO {

	int select_id(MemberVO mvo);

	MemberVO select_login(MemberVO mvo);

	int insert(MemberVO mvo);

	int update(MemberVO mvo);

	int updateLast_login(String id);

	List<MemberVO> selectList();

}
