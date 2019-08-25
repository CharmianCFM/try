import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Message} from '../../domain/message';
import {MessageService} from '../../service/message.service';
@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {
  messagelists :Message[];
  user_id:string;
 // username = 'hahah';
  message: Message;
  id: string;
  selectedMessage: Message;

  tishi: string;
  constructor(private  messageServer: MessageService, private  router: Router) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('userName');
    this.getMessageById();
  }
  getMessageById(): void {
    this.messageServer
      .getMessageById(this.user_id)
      .then(messagelists => this.messagelists = messagelists);
  }
  delete(message: Message): void {
    this.messageServer
      .deleteMessageById(message.clientLeaveMassageID)
      .then(() => {
        this.messagelists = this.messagelists.filter(h => h !== message);
        if (this.selectedMessage === message ) { this.selectedMessage = null; }
      });
  }

}
