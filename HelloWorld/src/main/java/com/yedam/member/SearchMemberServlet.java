package com.yedam.member;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/SearchMemberServlet")
public class SearchMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public SearchMemberServlet() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		// 파라미터와 응답정보에 한글이 포함된 경우
		request.setCharacterEncoding("UTF-8"); 
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");
		
		String id = request.getParameter("id");
		String nm = request.getParameter("nm");
		String ad = request.getParameter("ad");
		String ph = request.getParameter("ph");
		String gn = request.getParameter("gn");
		
		MemberVO vo = new MemberVO();
		vo.setUserId(id);
		vo.setUserName(nm);
		vo.setAddress(ad);
		vo.setPhone(ph);
		vo.setGender(gn);

		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.searchMemberList(vo);
		
		Gson gson = new GsonBuilder().create();
		response.getWriter().println(gson.toJson(list));
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		
	}

}
