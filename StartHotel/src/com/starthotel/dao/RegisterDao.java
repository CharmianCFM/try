package com.starthotel.dao;

import com.starthotel.model.ClientInfo;



public class RegisterDao extends BaseDao {
	public int register(ClientInfo ci) {
		// TODO Auto-generated method stub
		int flag = 1;				// 标识变量
		boolean flag1 = false;		// 检查身份证号是否冲突的标识变量
		try {
			// 连接数据库
			openconnection();
			String sql = "select * from Tclientinfo where Client_Id_Num=?";		// 检查身份证号是否已经存在
			ps = conn.prepareStatement(sql);
			ps.setString(1, ci.getClientIDNum());
			rs = ps.executeQuery();				// 执行查询
			while(rs.next()) {
				flag1 = true;
				break;
			}
			
			// 如果数据库中已经存在此身份证号则显示错误
			if(flag1 == true) {
				flag = 1;
				// 释放数据库连接
				closeResource();
				return flag;
			}
			
			// 执行插入操作
			/**
			 * sql语句没有;号
			 */
			String sqli = "insert into Tclientinfo(Client_Name,Client_Id_Num,Client_Tel,Client_Mail,Client_Password) values(?,?,?,?,?)";	// SQL语句
			ps = conn.prepareStatement(sqli);
			ps.setString(1, ci.getClientName());
			ps.setString(2, ci.getClientIDNum());
			ps.setString(3, ci.getClientTel());
			ps.setString(4, ci.getClientMail());
			ps.setString(5, ci.getClientPassword());
			
			System.out.println(ps.toString());
			
			int num = ps.executeUpdate();		// 该函数返回相应的行数，如果插入成功则返回1
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
