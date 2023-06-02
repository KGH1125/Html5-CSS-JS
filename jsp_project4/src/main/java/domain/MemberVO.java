package domain;

public class MemberVO {
	
	private int pno;
	private String id;
	private String password;
	private String email;
	private String reg_date;
	private String last_logout;
	private String grade;
	
	public MemberVO() {}

	public MemberVO(String id, String password) {
		this.id = id;
		this.password = password;
	}

	public MemberVO(String id, String password, String email) {
		this.id = id;
		this.password = password;
		this.email = email;
	}

	public MemberVO(int pno) {
		this.pno = pno;
	}

	
	
	public int getPno() {
		return pno;
	}

	public void setPno(int pno) {
		this.pno = pno;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getReg_date() {
		return reg_date;
	}

	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}

	public String getLast_logout() {
		return last_logout;
	}

	public void setLast_logout(String last_logout) {
		this.last_logout = last_logout;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	@Override
	public String toString() {
		return "MemberVO [pno=" + pno + ", id=" + id + ", password=" + password + ", email=" + email + ", reg_date="
				+ reg_date + ", last_logout=" + last_logout + ", grade=" + grade + "]";
	}
	
	
}
