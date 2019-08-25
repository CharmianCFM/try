import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  userId: number;
  username:string;
  constructor(private http: Http, @Inject('user') private userService) { }

  ngOnInit() {

    $('.eng').hover(function(){
      $('.eng p').show();
    },function(){
      $('.eng p').hide();
    });

    const divLogin = document.getElementById('Login');
    const divLogout = document.getElementById('Logout');
    const divRegister = document.getElementById('Register');
    const divlogineng = document.getElementById('logineng');
    const divWelcome = document.getElementById('Welcome');
    this.userId = -1;
    if(localStorage.getItem('userId') !== null){
      //已登录
      divLogin.style.display = 'none';
      divRegister.style.display = 'none';
      divlogineng.style.display = 'none';

     // this.username = <number><any>localStorage.getItem('username');
      this.username=localStorage.getItem('userName');
    }
    else{
      //未登录
      divLogout.style.display = 'none';
      divWelcome.style.display = 'none';

    }
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');

    this.userId = -1;
    location.reload();
  }


}
