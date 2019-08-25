import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PersonRoutingModule } from './person-routing.module';
import {InfochangeComponent} from './infochange/infochange.component';
import {OrderlistComponent} from './orderlist/orderlist.component';
import {PersonComponent} from './person.component';
import {InfoService} from '../service/info.service';
import { ApiService } from '../service/api.service';
import {OrderlistService} from '../service/orderlist.service';
import { MessagelistComponent } from './messagelist/messagelist.component';
import {MessageService} from '../service/message.service';
import {AuthGuardService} from '../service/auth-guard.service'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule,
    HttpModule
  ],
  declarations: [
    InfochangeComponent,
    OrderlistComponent,
    PersonComponent,
    MessagelistComponent,
  ],
  providers: [ApiService,
    InfoService,
    OrderlistService,
    MessageService,
    AuthGuardService,
  ],
})

export class PersonModule {

}
