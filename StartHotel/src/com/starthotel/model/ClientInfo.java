package com.starthotel.model;

public class ClientInfo {
	private static final int userTypeID = 0;		
	private int clientTypeID = 0;
	private String clientID = null;
	private String clientIDNum = null;
	private String clientName = null;			// 用户姓名
	private String clientTel = null;
	private String clientMail = null;
	private String clientPassword = null;
	private float allConsume = 0;
	
	public int getClientTypeID()
	{
		return clientTypeID;
	}
	public void setClientTypeID(int clientTypeID) {
		this.clientTypeID = clientTypeID;
	}
	public String getClientID() {
		return clientID;
	}
	public void setClientID(String clientID) {
		this.clientID = clientID;
	}
	public String getClientIDNum() {
		return clientIDNum;
	}
	public void setClientIDNum(String clientIDNum) {
		this.clientIDNum = clientIDNum;
	}
	public String getClientTel() {
		return clientTel;
	}
	public void setClientTel(String clientTel) {
		this.clientTel = clientTel;
	}
	public String getClientMail() {
		return clientMail;
	}
	public void setClientMail(String clientMail) {
		this.clientMail = clientMail;
	}
	public String getClientPassword() {
		return clientPassword;
	}
	public void setClientPassword(String clientPassword) {
		this.clientPassword = clientPassword;
	}
	public float getAllConsume() {
		return allConsume;
	}
	public void setAllConsume(float allConsume) {
		this.allConsume = allConsume;
	}
	public static int getUsertypeid() {
		return userTypeID;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
}
