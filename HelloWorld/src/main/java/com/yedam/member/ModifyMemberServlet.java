package com.yedam.member;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;


@WebServlet("/ModifyMemberServlet")
public class ModifyMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ModifyMemberServlet() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		response.setCharacterEncoding("UTF-8"); // 응답정보 한글 포함되어 있으면...
		response.setContentType("text/json; charset=UTF-8"); // 데이터 타입은 제이슨
		
		//삭제 기능 넣도록
		String deleteId = request.getParameter("id");
		
		
		MemDAO dao = new MemDAO();
		
		Gson gson = new GsonBuilder().create(); // json 반환
		JsonObject jsonObj = new JsonObject(); // json 데이터 만들기
		System.out.println(deleteId);
		if(dao.deleteMember(deleteId)) {
			jsonObj.addProperty("retCode", "OK");
			jsonObj.addProperty("userId", deleteId);
			
			
		}else {
			jsonObj.addProperty("retCode", "NG");
			jsonObj.addProperty("retMsg", "오류 발생 ! \n 담당자에게 문의하삼");
		}
		
		response.getWriter().println(gson.toJson(jsonObj));
		
	}
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8"); 
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");
		
	// 데이터 수정 및 화면변경
		String userId = request.getParameter("id");
		String userName = request.getParameter("nm");
		String userAddr = request.getParameter("ad");
		String userPhone = request.getParameter("ph");
		String userBirth = request.getParameter("br");
		String userGen = request.getParameter("gn");
		
		MemberVO vo = new MemberVO();
		vo.setAddress(userAddr);
		vo.setBirthDate(userBirth);
		vo.setGender(userGen);
		vo.setPhone(userPhone);
		vo.setUserId(userId);
		vo.setUserName(userName);
		
		MemDAO dao = new MemDAO();
		Map<String, Object> resultMap = dao.updateMember(vo);
		
		// json 포맷을 생성
		Gson gson = new GsonBuilder().create();
		response.getWriter().println(gson.toJson(resultMap));
		
	}

}
