import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AGL } from './AssignmentAGL/AGL';
import { CNTcpn } from './AssignmentAGL/CTleft';
import { ChildFCWT } from './childNewWt/childFcwt';
import { Classroom } from './Classroom/Clr-components';
import { Status } from './newLesson/class';
import { FCWT } from './newWeather/fcwt';
import { Studentcomponent } from './students/st-components';
import { XyzComponent } from './xyz/xyz.component';
const approuter:Routes=[
  {path:'weather',component:FCWT},
  {path:'class-r',component:Classroom},
  {path:'cnt1',component:CNTcpn}
]
@NgModule({
  // khai bao các component
  declarations: [
    AppComponent,
    XyzComponent,
    Classroom,
    Studentcomponent,
    Status,
    FCWT,
    ChildFCWT,
    AGL
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approuter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
