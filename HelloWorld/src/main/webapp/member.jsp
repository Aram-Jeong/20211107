<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member.jsp</title>
</head>
<body>
	<%
		String u_id = request.getParameter("id");
		String u_pw = request.getParameter("pw");
	%>
	
	<form>
		아이디: <input type="text" value="<%=u_id %>">
		비밀번호: <input type="text" value="<%=u_pw %>">
		<input type="submit" value="확인">
	</form>

</body>
</html>