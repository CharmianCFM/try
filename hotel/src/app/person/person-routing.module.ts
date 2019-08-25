import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PersonComponent} from './person.component';
import {InfochangeComponent} from './infochange/infochange.component';
import {OrderlistComponent} from './orderlist/orderlist.component';
import {MessagelistComponent} from './messagelist/messagelist.component';



const routes: Routes = [
  {
    path: '',
    component: PersonComponent,
    children: [
      {
        path: '',
        component: InfochangeComponent
      },
      {
        path: 'infochange',
        component: InfochangeComponent
      },
      {
        path: 'orderlist',
        component: OrderlistComponent
      },
      {
        path: 'messagelist',
        component: MessagelistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonRoutingModule { }
