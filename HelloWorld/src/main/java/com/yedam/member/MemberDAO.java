package com.yedam.member;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class MemberDAO {
	Connection conn;

	public MemberDAO() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String user = "web", pw = "web";

		// 1) JDBC 드라이버 로딩
		try {
			Class.forName("oracle.jdbc.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		// 2) DB연결(DB url, DB id, DB pw)
		try {
			conn = DriverManager.getConnection(url, user, pw);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	// insert 처리
	public boolean insertMember(String id, String pw, String birth, String gender) {
		String sql = "insert into member(user_id, user_pw, birth_date, gender) values(?,?,?,?)";
		try {
			PreparedStatement psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			psmt.setString(3, birth);
			psmt.setString(4, gender);
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력.");
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	// end of insertMember
	
	//조회(id, pw) => id, name / null 반환
	public Map<String, String> loginCheck(String id, String pw){
		String sql = "select * from member where user_id = ? and user_pw = ?";
		Map<String, String> map = new HashMap<String, String>();
		try {
			PreparedStatement psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			ResultSet rs = psmt.executeQuery();
			if(rs.next()) {
				map.put(rs.getString("user_id"), rs.getString("user_name"));
				return map;
			}
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
			
		}
		return null;
	}
	
	
	
	
}
