package com.starthotel.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;
import com.starthotel.dao.PersonalCenterInfoDao;
import com.starthotel.model.ClientInfo;

/**
 * Servlet implementation class UpdateUserServlet
 */

public class UpdateUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateUserServlet() {
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
		
		//System.out.println("in1");
		//String userIDNum = request.getParameter("userIDNum");
		String username = request.getParameter("userName");
		String userIDNum = request.getParameter("userIDNum");
		String userTel = request.getParameter("userTel");
		String userMail = request.getParameter("userMail");
		String password = request.getParameter("userPwd");
		System.out.println(userIDNum);
		
		ClientInfo ci = new ClientInfo();
		ci.setClientName(username);
		ci.setClientIDNum(userIDNum);
		ci.setClientTel(userTel);
		ci.setClientMail(userMail);
		ci.setClientPassword(password);
		
		PersonalCenterInfoDao pciDao = new PersonalCenterInfoDao();
		int flag = pciDao.updateClientInfo(ci);
		
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
