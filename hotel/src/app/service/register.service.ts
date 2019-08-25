import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';
import { Client } from '../domain/client';
//import { User } from '../domain/user';
@Injectable()
export class RegisterService {
  private api_url: string ;
  private headers: Headers;
  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/RegisterServlet';
    this.headers = apiService.getHeaders();
  }

  // 注册
  createClient(client: Client): Promise<Client> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, "userName="+client.userName+"&userIDNum="+client.userIDNum+"&userTel="+client.userTel+"&userMail="+client.userMail+"&userPwd="+client.userPwd, {headers: this.headers})
      .toPromise()
      .then(res => {
        if((res.json().result as string) ==  "success"){
          alert("注册成功");
        }else{
          alert("用户已注册过");
          window.location.reload(true);
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
