package com.yedam.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet({ "/GetMemberServlet", "/get_member" })
public class GetMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetMemberServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/xml;charset=UTF-8");
		PrintWriter out = response.getWriter();

		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.getMemberList();
		out.println("<record>");
		out.println("<title>Hello, 정아람입니다.</title>");
		for (MemberVO member : list) {
			out.println("<row>" //
					+ "<id>" + member.getUserId() + "</id>" //
					+ "<name>" + member.getUserName() + "</name>" //
					+ "<birth>" + member.getBirthDate() + "</birth>"//
					+ "<gender>" + member.getGender() + "</gender>" //
					+ "</row>");
		}
		out.println("</record>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}