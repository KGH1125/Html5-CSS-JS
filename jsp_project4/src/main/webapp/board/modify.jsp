<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>글수정</title>
<style type="text/css">
.mainBox {
	text-align: center;
	/* 	left: 50%;
	position: absolute;
	transform: translate(-50%, -50%); */
}

.titleinput {
	width: 300px;
	height: 20px;
	margin-bottom: 10px;
}

.conbox {
	width: 300px;
	height: 200px;
	margin-bottom: 10px;
	resize: none;
	padding: 4px;
}

from {
	display: inline-block;
}
</style>
</head>
<body>
	<div class="mainBox">
		<h3>글수정</h3>
		<form action="/brd/edit" method="post" enctype="multipart/form-data">
			<input type="hidden" name="bno" value=${bvo.bno }> <input
				type="hidden" name="writer" value=${ses.id }> <input
				type="text" name="title" class="titleinput" value="${bvo.title }"><br>
			<textarea name="content" class="conbox">${bvo.content }</textarea>
			<br> <span>이미지</span><br> <img alt="없음"
				src="/_fileUpload/th_${bvo.img_file }"> <input type="hidden"
				name="oldFile" value="${bvo.img_file }"><br> <input
				type="file" name="newFile"
				accept="image/png,image/jpeg,image/bmp,image/gif,image/jpg"><br>
			<button type="submit">완료</button>
			<a href="/brd/page"><button type="button">취소</button></a>
		</form>
	</div>
</body>
</html>