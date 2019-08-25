package com.starthotel.model;

public class Message {
	//private String clientID = null;
	private String userIDNum = null;
	private String userTel = null;
	private String userMail = null;
	private String text = null;
	private String userName = null;
	private int clientLeaveMassageID;
	public String getUserIDNum() {
		return userIDNum;
	}
	public void setUserIDNum(String userIDNum) {
		this.userIDNum = userIDNum;
	}
	public String getUserTel() {
		return userTel;
	}
	public void setUserTel(String userTel) {
		this.userTel = userTel;
	}
	public String getUserMail() {
		return userMail;
	}
	public void setUserMail(String userMail) {
		this.userMail = userMail;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getClientLeaveMassageID() {
		return clientLeaveMassageID;
	}
	public void setClientLeaveMassageID(int clientLeaveMassageID) {
		this.clientLeaveMassageID = clientLeaveMassageID;
	}
	
	
}
