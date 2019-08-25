package com.starthotel.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.starthotel.dao.MessageDao;
import com.starthotel.model.Message;

/**
 * Servlet implementation class CreateMessageServlet
 */

public class CreateMessageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateMessageServlet() {
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
		

		String username = request.getParameter("usrName");
		String userIDNum = request.getParameter("idcard");
		String userTel = request.getParameter("phonenumber");
		String userMail = request.getParameter("email");
		String text = request.getParameter("text");
		
		Message message = new Message();
		message.setUserName(username);
		message.setText(text);
		message.setUserMail(userMail);
		message.setUserTel(userTel);
		message.setUserIDNum(userIDNum);
		
		MessageDao messageDao = new MessageDao();
		int flag = messageDao.insert(message);
		

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
