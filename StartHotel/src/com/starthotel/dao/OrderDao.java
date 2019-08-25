package com.starthotel.dao;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;


import com.starthotel.model.Order;



public class OrderDao extends BaseDao {
	public int addOrder(Order order) {
		// TODO Auto-generated method stub
		int flag = 1;				// 标识变量
		try {
			// 连接数据库
			openconnection();
			
			
			// 用户订单插入语句，首先插入TORDER表，然后取出ORDER_ID
			String sqlo = "INSERT INTO TORDER(ID_NUM,USER_NAME,USER_TEL,HOTEL_ID,ROOM_TYPE,START_TIME,END_TIME,PRICE) "+
					"VALUES(?,?,?,?,?,?,?,?)";
			ps = conn.prepareStatement(sqlo);
			ps.setString(1, order.getId_num());
			ps.setString(2, order.getUser_name());
			ps.setString(3, order.getUser_tel());
			ps.setString(4, order.getHotel_id());
			ps.setString(5, order.getRoom_type());
			ps.setString(6, order.getStart_time());
			ps.setString(7, order.getEnd_time());
			ps.setString(8, order.getPrice());
			int num = ps.executeUpdate();		// 该函数返回相应的行数，如果插入成功则返回1
			if(num != 1) {
				flag = 1;
				return flag;
			}
			
			// 如果所有语句均正确则返回0
			flag = 0;
			
		} catch(Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// 释放数据库连接
		closeResource();
		
		return flag;
	}
	
	public List<Order> getOrder(String id_num){
		List<Order> ol = new ArrayList();
		
		try {
			// 连接数据库
			openconnection();
						
			// 执行查找操作
			/**
			 * sql语句没有;号
			 */
			String sqls = "SELECT * FROM TORDER WHERE ID_NUM = ?";	// SQL语句
			ps = conn.prepareStatement(sqls);
			ps.setString(1, id_num);
			rs = ps.executeQuery();							// 该函数返回集合
			// 如果rs不为空则开始赋值
			while(rs.next()) {
				//lpcio = new ArrayList<PersonalCenterInfoOrder>();
				Order order = new Order();
				order.setId_num(id_num);
				order.setUser_name(rs.getString("user_name"));
				order.setUser_tel(rs.getString("user_tel"));
				order.setHotel_id(rs.getString("hotel_id"));
				order.setRoom_type(rs.getString("room_type"));
				order.setStart_time(rs.getString("start_time"));
				order.setEnd_time(rs.getString("end_time"));
				order.setPrice(rs.getString("price"));
				//System.out.println(order.getHotel_id());
				ol.add(order);
			}
		} catch(Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// 释放数据库连接
		closeResource();
		
		return ol;
	}
		
	
}
