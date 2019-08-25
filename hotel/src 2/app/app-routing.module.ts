//import angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import my mudules

import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomModule } from './room/room.module';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'room',
    canActivate: [],
    loadChildren: 'app/room/room.module#RoomModule'
   // component: RoomModule
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
