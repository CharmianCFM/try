import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../domain/order';
import {OrderlistService} from '../../service/orderlist.service';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderlistComponent implements OnInit {
  orders: Order[];
//  orderID = '2222';
  user_id :string;
  tsihi: string;
  selectedId : string;
  constructor(private orderlistService: OrderlistService, private router: Router) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('userName');
this.getOrderByID();
  }
  getOrderByID(): void {
    this.orderlistService
      .getOrderById(this.user_id)
      .then(orders => this.orders = orders);
    this.tsihi = '获取成功';
  }
  /*
  deleteHero(orderlist: Orderlist): void {
    this.orderlistService
        .deleteHeroById(orderlist.id)
        .then(() => {
          this.orderlists = this.orderlists.filter(h => h !== orderlist);

        });
  }
*/
}
