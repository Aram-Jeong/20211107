package com.yedam.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;


@WebServlet("/GetMemberJsonServ")
public class GetMemberJsonServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public GetMemberJsonServ() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		response.setContentType("text/json;charset=UTF-8");//가져오는 파일의 type으로 수정
		PrintWriter out = response.getWriter();
//		out.println("{\"name\":\"hong\",\"age\":20,\"phone\" : \"0000-0000\"}");
		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.getMemberList();
		Gson gson = new GsonBuilder().create();
		out.println(gson.toJson(list));
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// 입력값 한글 받아오기
		request.setCharacterEncoding("UTF-8"); 
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json; charset=UTF-8");
		
			//입력하는 기능
			MemDAO dao = new MemDAO();
			String userId = request.getParameter("user_id");
			String userName = request.getParameter("user_name");
			String address = request.getParameter("user_addr");
			String phone = request.getParameter("user_phone");
			String gender = request.getParameter("gen");
			String birth = request.getParameter("ubirth");
			
			MemberVO vo = new MemberVO();
			vo.setUserId(userId);
			vo.setUserName(userName);
			vo.setAddress(address);
			vo.setGender(gender);
			vo.setBirthDate(birth);
			vo.setPhone(phone);
			
			Gson gson = new GsonBuilder().create(); // json 반환
			JsonObject jsonObj = new JsonObject(); // json 데이터 만들기
			
			
			//{"retCode":"OK", "retVal": {vo}}
			//{"retCode":"NG", "retVal": "담당자에게 문의"}
			if(dao.insertMember(vo)) {
				jsonObj.addProperty("retCode", "OK");
				jsonObj.addProperty("userId", vo.getUserId());
				jsonObj.addProperty("userName", vo.getUserName());
				jsonObj.addProperty("birthDate", vo.getBirthDate());
				jsonObj.addProperty("address", vo.getAddress());
				jsonObj.addProperty("phone", vo.getPhone());
				jsonObj.addProperty("gender", vo.getGender());
				
			}else {
				jsonObj.addProperty("retCode", "NG");
				jsonObj.addProperty("retMsg", "오류 발생 ! \n 담당자에게 문의하삼");
			}
			
			response.getWriter().println(gson.toJson(jsonObj));
			
		}
	}


