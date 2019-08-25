import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Message } from '../domain/message';
import { ApiService } from './api.service';

@Injectable()
export class MessageService {
  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/message';
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
    const url = `${this.api_url}/${msg.id}`;
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
      .post(url, JSON.stringify(msgg), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message)
      .catch(this.handleError);
  }


}

