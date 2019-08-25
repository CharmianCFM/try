import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomModule } from './room/room.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { MessageComponent } from './message/message.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './service/api.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    ReservationComponent,
    NavbarComponent,
    HomeComponent,
    FootComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    HttpModule,
    RoomModule,
    BrowserModule,
    AppRoutingModule,
    ProfileModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
