<%@page import="java.util.Map"%>
<%@page import="com.yedam.member.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login.jsp</title>
</head>
<body>
	<%
		String id = request.getParameter("user_id");
		String pw = request.getParameter("user_pw");
		MemberDAO dao = new MemberDAO();
		Map<String, String> map = dao.loginCheck(id, pw);
		if(map == null){
			out.println("<h1>사용자 아이디 / 비밀번호를 확인하세요.</h2>");
		}else{
			String val = map.get(id);
			out.println("<h1>" + val + "님 환영합니다.</h1>");
			
		}
	%>
</body>
</html>