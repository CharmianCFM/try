import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {Client} from '../../domain/client';
import {InfoService} from '../../service/info.service';
import {NzNotificationService} from 'ng-zorro-antd';
import { Location } from '@angular/common';
@Component({
  selector: 'app-infochange',
  templateUrl: './infochange.component.html',
  styleUrls: ['./infochange.component.css'],
  providers: [InfoService],
  encapsulation: ViewEncapsulation.None
})
export class InfochangeComponent implements OnInit {
  client=new Client();
 // userID= '1';
  user_id:string;
  tishi: string;
  flag : string;

  createNotification = (type) => {
    this._notification.create(type, '成功进入个人中心！！', '欢迎'+this.user_id);
  };
  constructor(private infoService: InfoService, private router: Router,private _notification: NzNotificationService, private location: Location) { }

  ngOnInit(): void {
   //this.flag = localStorage.getItem('flag');
    this.user_id=localStorage.getItem('userName');
    console.log("info "+this.user_id);
    this.getUserById();
    
      this.createNotification('success');
      //localStorage.removeItem('flag');
      //localStorage.setItem('flag','0');
    
    
  }
  getUserById(): void {

    this.infoService
      .getUserById(this.user_id)
      .then(client => this.client = client);
    this.tishi = '获取成功';
  }
  update(): void {
    this.infoService
      .updateUser(this.client)
      .then(client => this.client = client);
    this.tishi = '修改成功';
  }
  save(): void{
    this.infoService.updateUser(this.client)
      .then(() => this.goBack());
      this.tishi = '修改成功';
  }
  goBack(): void {
    this.location.back();
  }

}
