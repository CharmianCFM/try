import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params }            from '@angular/router';

import { Order }                from '../domain/order';
import { OrderService }         from '../service/order.service';
import * as moment from 'moment';
import {NzMessageService} from 'ng-zorro-antd';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import {NzNotificationService} from 'ng-zorro-antd';
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [OrderService]
})
export class ReservationComponent implements OnInit {
  order= new Order();
  submitted = false;
  pic = true;
  id: number;
  tishi:string;
  //假设用户已经登录了，用户的id为user_id_set
  //user_id_set='er999';
  //用户已经登录了，用户的id为user_id,这个值得获取在ngOnInit默认方法的里面获取了本地的用户登录id
  user_id:string;
  createNotification = (type) => {
    this._notification.create(type, '请先登录', '登录之后即可预定房间！');
  };
  constructor(private orderService :OrderService,private _message: NzMessageService,private _notification: NzNotificationService) {


  }
  createBasicMessage = () => {
    this._message.success('预定成功！', {nzDuration: 10000});
  };
  _id;
  createBasicMessage1 = () => {
    this._id = this._message.loading('正在执行中', { nzDuration: 0 }).messageId;
    setTimeout(_ => {
      this._message.remove(this._id);
    }, 1000)
  };
  ngOnInit() {
    this.user_id=localStorage.getItem('userName');
    if(this.user_id=localStorage.getItem('userName'))
    {
      console.log("xxxxxxxxxx");
    }
    else
    {
      console.log("zzzzzzzzz");
      this.createNotification('warning');
    }
  }

  onSubmit(){
    this.create();
    this.orderService.createOrder(this.order)
      .then(order => {
        console.log(order);
        this.tishi='成功';
        this.submitted = true;
        this.pic = false;
        this.createBasicMessage1();
        this.createBasicMessage();
      }
    );
  }
  create(){
    this.order.id_num=this.user_id;
  }

  _startDate = null;
  _endDate = null;
  newArray = (len) => {
    const result = [];
    for (let i = 0; i < len; i++) {
      result.push(i);
    }
    return result;
  };
  _startValueChange = () => {
    if (this._startDate > this._endDate) {
      this._endDate = null;
    }
  };
  _endValueChange = () => {
    if (this._startDate > this._endDate) {
      this._startDate = null;
    }
  };
  _disabledStartDate = (startValue) => {
    if (!startValue || !this._endDate) {
      return false;
    }
    return startValue.getTime() >= this._endDate.getTime();
  };
  _disabledEndDate = (endValue) => {
    if (!endValue || !this._startDate) {
      return false;
    }
    return endValue.getTime() <= this._startDate.getTime();
  };
  get _isSameDay() {
    return this._startDate && this._endDate && moment(this._startDate).isSame(this._endDate, 'day')
  }
  get _endTime() {
    return {
      nzHideDisabledOptions: true,
      nzDisabledHours: () => {
        return this._isSameDay ? this.newArray(this._startDate.getHours()) : [];
      },
      nzDisabledMinutes: (h) => {
        if (this._isSameDay && h === this._startDate.getHours()) {
          return this.newArray(this._startDate.getMinutes());
        }
        return [];
      },
      nzDisabledSeconds: (h, m) => {
        if (this._isSameDay && h === this._startDate.getHours() && m === this._startDate.getMinutes()) {
          return this.newArray(this._startDate.getSeconds());
        }
        return [];
      }
    }
  }

}
