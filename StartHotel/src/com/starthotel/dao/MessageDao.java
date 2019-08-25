package com.starthotel.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.starthotel.model.Message;



public class MessageDao extends BaseDao {
	public int insert(Message clm) {
		// TODO Auto-generated method stub
		int flag = 1;				// 标识变量
		try {
			// 连接数据库
			openconnection();
						
			// 执行插入操作
			/**
			 * sql语句没有;号
			 */
			String sqli = "insert into TCLIENTLEAVEMASSAGES(userIDNum,text,userMail,userTel,userName) values(?,?,?,?,?)";	// SQL语句
			ps = conn.prepareStatement(sqli);
			//ps.setString(1, clm.getClientID());
			ps.setString(1, clm.getUserIDNum());
			ps.setString(2, clm.getText());
			ps.setString(3, clm.getUserMail());
			ps.setString(4, clm.getUserTel());
			ps.setString(5, clm.getUserName());
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
	
	 public boolean message_delet_dao(String id){
		System.out.println(id);
		int intid = Integer.valueOf(id);
		System.out.println(intid);
        String sql_message_delet = "DELETE FROM TCLIENTLEAVEMASSAGES WHERE CLIENT_LEAVE_MESSAGE_ID=?";
        openconnection();
        try {
            ps = conn.prepareStatement(sql_message_delet);
            ps.setInt(1,intid);
            //rs = ps.executeQuery();
            ps.executeUpdate();
            if(rs.next()){
              return true;
            }
            else return true;

        }catch(Exception e){

        }finally {
            closeResource();
        }
        return false;
	}
	 
	 public List<Message> getALLMessages(String id_num){
	        ArrayList<Message> clmarray=null;
	        Message clm_cell;

	        String sql="SELECT * FROM TCLIENTLEAVEMASSAGES WHERE userIDNum = ?";
	        openconnection();
	        try{
	            ps= conn.prepareStatement(sql);
	            ps.setString(1,id_num);		
	            rs = ps.executeQuery();

	            if(rs != null){
	                clmarray = new ArrayList<Message>();

	                while(rs.next()){
	                    clm_cell = new  Message();
	                    clm_cell.setUserIDNum(rs.getString("userIDNum"));
	                    clm_cell.setText(rs.getString("text"));
	                    clm_cell.setClientLeaveMassageID(rs.getInt("client_leave_message_id")); 
	                    clm_cell.setUserMail(rs.getString("userMail"));
	                    clm_cell.setUserTel(rs.getString("userTel"));
	                    clm_cell.setUserName(rs.getString("userName"));
	                    //hotel_cell.hotel_ADDRESS =rs.getString("hotel_ADDRESS");
	                    //hotel_cell.hotel_TEL = rs.getString("hotel_TEL");
	                    clmarray.add(clm_cell);
	                }
////	                System.out.println("开始在DAO层输出");
//	                for(int i =0 ;i<hotelarray.size();i++){
	//
//	                    System.out.println(hotelarray.get(i));
//	                }
	            }



	            return clmarray;
	        }catch (SQLException e) {
	            e.printStackTrace();
	        } finally {
	            closeResource();
	        }

	        return  null;
	    }
}
