import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Message } from '../domain/message';
import { ApiService } from './api.service';
import {Order} from "../domain/order";

@Injectable()
export class MessageService {
  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/CreateMessageServlet';
    this.headers = apiService.getHeaders();
  }
  getHeroes(): Promise<Message[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  //修改Hero
  updateMsg(msg: Message): Promise<Message> {
    const url = `${this.api_url}/${msg.clientLeaveMassageID}`;
    return this.http
      .put(url, JSON.stringify(msg), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message)
      .catch(this.handleError);
  }
  //新建Hero
  createMsg(msgg: Message): Promise<Message> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, "usrName="+msgg.userName+"&idcard="+msgg.userIDNum+"&phonenumber="+msgg.userTel+"&email="+msgg.userMail+"&text="+msgg.text, {headers: this.headers})
      .toPromise()
      .then(res => {
        if((res.json().result as string) ==  "success"){
          alert("留言成功");
        }else{
          alert("留言失败");
          window.location.reload(true);
        }
      })
      .catch(this.handleError);
  }

  getMessageById(user_id: string): Promise<Message[]> {
    var url = "http://localhost:8080/StartHotel/GetMessageServlet";
    // const url = `${this.api_url}?idcard=${username}`;
    return this.http.post(url,"id_num="+user_id, {headers: this.headers})
      .toPromise()
      .then(res => {
        const messages = res.json() as Message[];
        return messages;}
      ).catch(this.handleError);
  }
  getMessage(): Promise<Message[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message[])
      .catch(this.handleError);
  }


  deleteMessageById(id: number): Promise<void> {
    var url = "http://localhost:8080/StartHotel/DeleteMessageServlet";
    // const url = `${this.api_url}/${id}`;
    return this.http.post(url,"id="+id, {headers: this.headers})
      .toPromise()
      .then(res => {
        if((res.json().result as string) ==  "success"){
          alert("删除成功");
        }else{
          alert("删除成功");
        }
      })
      .catch(this.handleError);
  }



}

