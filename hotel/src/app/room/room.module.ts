import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { DeluxeComponent } from './deluxe/deluxe.component';
import { StandardComponent } from './standard/standard.component';
import { SuperiorComponent } from './superior/superior.component';
import { RoomRoutingModule }  from './room-routing.module';
import { RoomComponent } from './room.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoomRoutingModule
  ],
  declarations: [
    DeluxeComponent,
    StandardComponent,
    SuperiorComponent,
    RoomComponent
  ]
  //providers: [ HeroService ]
})
export class RoomModule{}
