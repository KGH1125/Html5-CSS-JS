package domain;

public class CommentVO {

	private int cno;
	private int target_bno;
	private String writer;
	private String content;
	private String reg_date;

	public CommentVO() {
	}

	public CommentVO(int target_bno, String writer, String content) {
		this.target_bno = target_bno;
		this.writer = writer;
		this.content = content;
	}

	public int getCno() {
		return cno;
	}

	public void setCno(int cno) {
		this.cno = cno;
	}

	public int getTarget_bno() {
		return target_bno;
	}

	public void setTarget_bno(int target_bno) {
		this.target_bno = target_bno;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getReg_date() {
		return reg_date;
	}

	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}

	@Override
	public String toString() {
		return "CommentVO [cno=" + cno + ", target_bno=" + target_bno + ", writer=" + writer + ", content=" + content
				+ ", reg_date=" + reg_date + "]";
	}

}
