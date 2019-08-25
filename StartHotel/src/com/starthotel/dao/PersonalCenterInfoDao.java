package com.starthotel.dao;

import com.starthotel.model.ClientInfo;



public class PersonalCenterInfoDao extends BaseDao {
	public ClientInfo service(String string) {
		// TODO Auto-generated method stub
		ClientInfo ci = new ClientInfo();
		try {
			
			// 连接数据库
			openconnection();
			// 执行
			String sql = "select * from Tclientinfo where Client_Id_Num = ?";	// SQL语句
			ps = conn.prepareStatement(sql);
			ps.setString(1, string);				// 替换 sql 中的 ?
			rs = ps.executeQuery();					// 执行查询
			// 如果rs有内容则说明正确
			while(rs.next()) {
				ci.setClientIDNum(string);					// 设置身份证号
				ci.setClientID(rs.getString("client_id"));	// 用户ID
				ci.setClientName(rs.getString("client_name"));	// 用户姓名
				ci.setClientMail(rs.getString("client_mail"));	// 用户邮箱
				ci.setClientTel(rs.getString("client_tel"));	// 用户手机
				break;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		// 释放数据库连接
		closeResource();		
		return ci;
	}
	
	public int updateClientInfo(ClientInfo ci) {
		// TODO Auto-generated method stub
		//System.out.println("in!");
		int flag = 1;				// 标识变量
		try {
			// 连接数据库
			openconnection();
						
			// 执行更新操作
			/**
			 * sql语句没有;号
			 */
			String sqli = "UPDATE TCLIENTINFO SET CLIENT_TEL = ?,CLIENT_MAIL = ?,CLIENT_NAME=?,CLIENT_PASSWORD=? WHERE CLIENT_ID_NUM = ?";	// SQL语句
			ps = conn.prepareStatement(sqli);
			ps.setString(1, ci.getClientTel());
			ps.setString(2, ci.getClientMail());
			ps.setString(3, ci.getClientName());
			ps.setString(4, ci.getClientPassword());
			ps.setString(5, ci.getClientIDNum());
			int num = ps.executeUpdate();		// 该函数返回相应的行数，如果更新成功则返回1
			if(num == 1) {
				flag = 0;
			}			
		} catch(Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// 释放数据库连接
		closeResource();
		
		return flag;
	}
}
