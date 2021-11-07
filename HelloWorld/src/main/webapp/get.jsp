<%@page import="com.yedam.member.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>get.jsp</title>
</head>
<body>
	<%
		String id = request.getParameter("user_id"); //admin
		String pw = request.getParameter("user_pw"); //1234
		String birth = request.getParameter("birth"); 
		String gender = request.getParameter("gender");
		
		MemberDAO dao = new MemberDAO();
		boolean success = dao.insertMember(id, pw, birth, gender);
		if(success){
			out.println("<h1>입력성공</h1>");
		}else{
			out.println("<h1>입력실패</h1>");
		}
	%>
	
	<h1>입력ID: <%=id %></h1>
	<h1>입력비번: <%=pw %></h1>
	
	<a href="member.jsp?id=<%=id %>&pw=<%=pw %>">회원정보</a>
	
</body>
</html>