package domain;

public class BoardVO {
	
	private int bno;
	private String title;
	private String content;
	private String img_file;
	private String writer;
	private String reg_date;
	private String last_modify;
	private int read_count;
	
	public BoardVO() {}

	public BoardVO(String title, String content, String img_file, String writer) {
		this.title = title;
		this.content = content;
		this.img_file = img_file;
		this.writer = writer;
	}

	public BoardVO(int bno) {
		this.bno = bno;
	}

	public int getBno() {
		return bno;
	}

	public void setBno(int bno) {
		this.bno = bno;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImg_file() {
		return img_file;
	}

	public void setImg_file(String img_file) {
		this.img_file = img_file;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getReg_date() {
		return reg_date;
	}

	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}

	public String getLast_modify() {
		return last_modify;
	}

	public void setLast_modify(String last_modify) {
		this.last_modify = last_modify;
	}

	public int getRead_count() {
		return read_count;
	}

	public void setRead_count(int read_count) {
		this.read_count = read_count;
	}

	@Override
	public String toString() {
		return "BoardVO [bno=" + bno + ", title=" + title + ", content=" + content + ", img_file=" + img_file
				+ ", writer=" + writer + ", reg_date=" + reg_date + ", last_modify=" + last_modify + ", read_count="
				+ read_count + "]";
	}
	
	
	
}
