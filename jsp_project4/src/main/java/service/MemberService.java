package service;

import java.util.List;

import domain.MemberVO;

public interface MemberService {

	int select_id(MemberVO mvo);

	MemberVO select_login(MemberVO mvo);

	int join(MemberVO mvo);

	int edit(MemberVO mvo);

	int lastLogin(String id);

	List<MemberVO> getlist();

}
