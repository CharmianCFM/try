import { Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Message }        from '../domain/message';
import { MessageService } from '../service/message.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MessageService]

})
export class MessageComponent implements OnInit {
 // @Input()msg: Message;
  msg: Message = {
    userName:'Name..',
    clientLeaveMassageID: 0,
  userIDNum: '',
  userMail:'Email..',
  userTel: 'Phone..',
  text: 'Message..',
 level: 3
  };
  done : string;
  user_id :string;
  constructor(
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

ngOnInit() {
   /* this.route.paramMap
      .switchMap((params: ParamMap) => this.messageService.getHeroById(+params.get('id')))
      .subscribe(msg => this.msg = msg);*/
  this.user_id=localStorage.getItem('userName');
  }
   save(): void {
    this.check();
   // this.msg = null ;
    //  .then(() => this.goBack());
     //这块把数据清空，把之前的输入框用ngif，然后尝试在这边添加一个感谢反馈的界面（几个标签），
  }
  check():void{
  if(this.msg.text.length == 0 ||this.msg.text.match("Message")){
    alert("我们需要您的建议！");
  }else{
    this.msg.userIDNum = this.user_id;
    this.messageService.createMsg(this.msg)
      .then(()=>this.clear());
  }
  }
  clear():void {
   // this.msg = null;
    this.done = "感谢您的建议！";
  }
  goBack(): void {
    this.location.back();
  }
}
