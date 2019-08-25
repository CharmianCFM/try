
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Order } from '../domain/order';

import { ApiService } from './api.service';

@Injectable()
export class OrderService {
  private api_url : string ;
  private headers : Headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/CreateOrderServlet';
    this.headers = apiService.getHeaders();
  }

  //创建订单的方法

  createOrder(order: Order): Promise<Order> {

    const url = `${this.api_url}`;
    return this.http
      .post(url, "id_num="+order.id_num+"&user_name="+order.user_name+"&user_tel="+order.user_tel+"&hotel_id="+order.hotel_id+"&room_type="+order.room_type+"&start_time="+order.start_time+"&end_time="+order.end_time, {headers: this.headers})
      .toPromise()
      .then(res => {
        if((res.json().result as string) ==  "success"){
          alert("预订成功");
        }else{
          alert("预订失败");
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
