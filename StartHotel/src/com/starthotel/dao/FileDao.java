package com.starthotel.dao;

import com.starthotel.model.ClientInfo;



public class FileDao extends BaseDao {
	public ClientInfo login(String useraccount) {
		// TODO Auto-generated method stub
		// 
		ClientInfo ci = new ClientInfo();
		//Boolean flag = false;
		
		try {
			
			// 连接数据库
			openconnection();
			// 执行
			//String sql = "select * from Tclientinfo where Client_Id_Num = ? and Client_Password = ?";	// SQL语句
			String sql = "select * from Tclientinfo where Client_Id_Num = ?";	// SQL语句
			ps = conn.prepareStatement(sql);
			ps.setString(1, useraccount);			// 替换 sql 中的 ?
			//ps.setString(2, userpwd);
			rs = ps.executeQuery();					// 执行查询
			// 如果rs有内容则说明正确
			while(rs.next()) {
				ci.setClientIDNum(useraccount);					// 设置身份证号
				ci.setClientID(rs.getString("client_id"));	// 用户ID
				ci.setClientName(rs.getString("client_name"));	// 用户姓名
				ci.setClientMail(rs.getString("client_mail"));	// 用户邮箱
				ci.setClientTel(rs.getString("client_tel"));	// 用户手机
				ci.setClientPassword(rs.getString("client_password"));
				//break;
				//flag = true;
				break;
			}
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		// 释放数据库连接
		closeResource();
		// 
		//return flag;
		return ci;
				
	}
}
