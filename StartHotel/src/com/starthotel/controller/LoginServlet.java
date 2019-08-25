package com.starthotel.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.starthotel.dao.FileDao;
import com.starthotel.model.ClientInfo;

/**
 * Servlet implementation class LoginServlet
 */

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
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
		
		FileDao fileDao = new FileDao();
		
		String userIDNum = request.getParameter("userIDNum");
		
		ClientInfo ci = fileDao.login(userIDNum);
		
		JsonObject object = new JsonObject();
		PrintWriter out=response.getWriter();
		
		
		object.addProperty("userIDNum", ci.getClientIDNum());
		object.addProperty("userName", ci.getClientName());
		object.addProperty("userTel",ci.getClientTel());
		object.addProperty("userMail",ci.getClientMail());
		object.addProperty("userPwd",ci.getClientPassword());
		
		System.out.println(object.toString());
		out.println(object.toString());
	}

}
