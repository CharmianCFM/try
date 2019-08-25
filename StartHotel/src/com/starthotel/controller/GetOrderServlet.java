package com.starthotel.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.starthotel.dao.MessageDao;
import com.starthotel.dao.OrderDao;
import com.starthotel.model.Message;
import com.starthotel.model.Order;

/**
 * Servlet implementation class GetOrderServlet
 */

public class GetOrderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetOrderServlet() {
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
		
		String userIDNum = request.getParameter("id_num");
		System.out.println("in1");
		
		OrderDao orderDao = new OrderDao();
		List<Order> lo = orderDao.getOrder(userIDNum);
		System.out.println("in2");
		JSONArray json = JSONArray.fromObject(lo);
		//JsonObject objects[] = new JsonObject[100];
		System.out.println("in3");
		PrintWriter out=response.getWriter();
		/*
		for(int i=0;i<lo.size();i++){
			JsonObject object = new JsonObject();
			//PrintWriter out=response.getWriter();
			object.addProperty("id_num", lo.get(i).getId_num());
			object.addProperty("user_name",lo.get(i).getUser_name());
			object.addProperty("user_tel", lo.get(i).getUser_tel());
			object.addProperty("hotel_id",lo.get(i).getHotel_id());
			object.addProperty("room_type",lo.get(i).getRoom_type());
			object.addProperty("start_time",lo.get(i).getStart_time());
			object.addProperty("end_time",lo.get(i).getEnd_time());
			System.out.println(object.toString());
			//out.println(object.toString());
		}
		*/
		System.out.println(json.toString());
		out.println(json.toString());
	}

}
