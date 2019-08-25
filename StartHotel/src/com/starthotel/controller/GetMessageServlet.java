package com.starthotel.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.google.gson.JsonObject;
import com.starthotel.dao.MessageDao;
import com.starthotel.model.Message;

/**
 * Servlet implementation class GetMessageServlet
 */

public class GetMessageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetMessageServlet() {
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
		System.out.println(userIDNum);
		MessageDao messageDao = new MessageDao();
		List<Message> lm = messageDao.getALLMessages(userIDNum);
		
		JSONArray json = JSONArray.fromObject(lm);
		PrintWriter out=response.getWriter();
		/*
		for(int i=0;i<lm.size();i++){
			JsonObject object = new JsonObject();
			PrintWriter out=response.getWriter();
			object.addProperty("usrname", lm.get(i).getUserName());
			object.addProperty("idcard",lm.get(i).getUserIDNum());
			object.addProperty("email", lm.get(i).getUserMail());
			object.addProperty("phonenumber",lm.get(i).getUserTel());
			object.addProperty("text",lm.get(i).getText());
			out.println(object.toString());
		}
		*/
		System.out.println(json.toString());
		out.println(json.toString());
		
	}

}
