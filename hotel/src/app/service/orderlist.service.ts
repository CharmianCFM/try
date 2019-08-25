import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ApiService} from './api.service';

import {Client} from "../domain/client";
import { Order } from "../domain/order";

@Injectable()
export class OrderlistService {
  private api_url: string ;
  private headers: Headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/orders';
    this.headers = apiService.getHeaders();
  }
  getOrderById(orderID: string): Promise<Order[]> {
    var url = "http://localhost:8080/StartHotel/GetOrderServlet";
    // const url = `${this.api_url}?user_id=${orderID}`;
    return this.http.post(url, "id_num="+orderID,{headers: this.headers})
      .toPromise()
      .then(res => {
        const orders = res.json() as Order[];
        return orders;}
       // return (orderlists.length > 0) ? orderlists[1] : null;
      ).catch(this.handleError);
  }

  deleteHeroById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
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
