import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Client} from '../domain/client';
import {ApiService} from './api.service';
import { Info } from '../domain/info';



@Injectable()
export class InfoService {
  private api_url: string ;
  private headers: Headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/users';
    this.headers = apiService.getHeaders();
  }

  getUserById(userID: string): Promise<Client> {
    var url = "http://localhost:8080/StartHotel/GetUserServlet";
    //const url = `${this.api_url}?userIDNum=${userID}`;
    return this.http.post(url,"userIDNum=" + userID, {headers: this.headers})
      .toPromise()
      .then(res => {
        const infos = res.json() as Client;
        return infos;
        //return (infos.length > 0) ? infos[0] : null;
      }).catch(this.handleError);
  }
  //修改Hero

  updateUser(info: Client): Promise<Client> {
    var url = "http://localhost:8080/StartHotel/UpdateUserServlet";
    //const url = `${this.api_url}/${info.userIDNum}`;
    return this.http
      .post(url, "userName="+info.userName+"&userIDNum="+info.userIDNum+"&userTel="+info.userTel+"&userMail="+info.userMail+"&userPwd="+info.userPwd, {headers: this.headers})
      .toPromise()
      //.then(res => res.json() as Client)
      .then(res =>{
        if((res.json().result as string) ==  "success"){
          alert("修改成功");
        }else{
          alert("修改失败");
        }
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
