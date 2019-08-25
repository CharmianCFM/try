package com.starthotel.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class BaseDao {
	protected Connection conn = null;
	protected PreparedStatement ps = null;
	protected ResultSet rs = null;
	protected Statement st = null;
	
	/*
	 * 打开并连接数据库
	 */
	protected void openconnection(){
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/hotelmanage","root","950406lc");
			//Class.forName("oracle.jdbc.driver.OracleDriver");
			//conn = DriverManager.getConnection("jdbc:oracle:thin:@10.0.6.23:1521:orcl","StartHotle","123456");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {			
			e.printStackTrace();
		}
	}	

	/*
	 * 关闭数据库
	 */
	protected boolean closeResource(){		
		
		try {
			if(rs != null)
				rs.close();
			if(ps != null)
				ps.close();
			if(st!= null)
				st.close();
			if(conn != null)
				conn.close();			
		} catch (SQLException e) {			
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
