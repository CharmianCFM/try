import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { User } from '../domain/user';
import { ApiService } from './api.service';


@Injectable()
export class UserService {

  private api_url : string ;
  private headers : Headers ;
  loginuser = new User();

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/users';
    this.headers = apiService.getHeaders();
  }

  //查询所有User
  getUsers(): Promise<User[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User[])
      .catch(this.handleError);
  }

  //按id查询User
  getUserById(id: number): Promise<User> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  //按username查询User
  getUserByUsername(username: string): Promise<User> {
    var url = "http://localhost:8080/StartHotel/LoginServlet";
    // const url = `${this.api_url}/?userIDNum=${username}`;
    return this.http.post(url, "userIDNum="+username,{ headers: this.headers })
      .toPromise()
      .then(res => {
        username = (res.json().userIDNum as string);
        this.loginuser.idcard = (res.json().userIDNum as string);
        this.loginuser.password = (res.json().userPwd as string);
        this.loginuser.phonenumber = (res.json().userTel as string);
        this.loginuser.email = (res.json().userMail as string);
        // let users = res.json() as User[];
        // return (users.length > 0) ? users[0] : null;
        return this.loginuser;
      })
      .catch(this.handleError);
  }

  //创建一个User
  createUser(user: User): Promise<User> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  //修改某个User
  updateUser(user: User): Promise<User> {
    const url = `${this.api_url}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  //删除某个User
  deleteUser(user: User): Promise<void> {
    const url = `${this.api_url}/${user.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
