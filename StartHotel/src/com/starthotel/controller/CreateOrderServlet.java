package com.starthotel.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.starthotel.dao.OrderDao;
import com.starthotel.model.Order;

/**
 * Servlet implementation class CreateOrderServlet
 */

public class CreateOrderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateOrderServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		String id_num = request.getParameter("id_num");
		String user_name = request.getParameter("user_name");
		String user_tel = request.getParameter("user_tel");
		String hotel_id = request.getParameter("hotel_id");
		String room_type = request.getParameter("room_type");
		String start_time = request.getParameter("start_time");
		String end_time = request.getParameter("end_time");
		
		Order order = new Order();
		order.setId_num(id_num);
		order.setUser_name(user_name);
		order.setUser_tel(user_tel);
		order.setHotel_id(hotel_id);
		order.setRoom_type(room_type);
		order.setStart_time(start_time);
		order.setEnd_time(end_time);
		if(room_type.equals("StandardRoom")){
			order.setPrice("2288");
		}else if(room_type.equals("LuxuryRoom")){
			order.setPrice("2888");
		}else{
			order.setPrice("3200");
		}
		//order.setPrice(300);
		
		OrderDao orderDao = new OrderDao();
		
		int flag = orderDao.addOrder(order);

		JsonObject object = new JsonObject();
		PrintWriter out=response.getWriter();
		
		if(flag == 1){
			object.addProperty("result", "error");
		}else{
			object.addProperty("result","success");
		}
		
		out.println(object.toString());
	}

}
