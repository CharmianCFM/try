import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeluxeComponent } from './deluxe/deluxe.component';
import { StandardComponent } from './standard/standard.component';
import { SuperiorComponent } from './superior/superior.component';
import { RoomComponent } from './room.component';

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    children: [
      {
        path:'',
        component: StandardComponent
      },
      {
        path:'standard',
        component: StandardComponent
      },
      {
        path:'spuerior',
        component: SuperiorComponent
      },
      {
        path:'deluxe',
        component: DeluxeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoomRoutingModule { }
