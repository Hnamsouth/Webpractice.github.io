import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildFCWT } from './childNewWt/childFcwt';
import { Classroom } from './Classroom/Clr-components';
import { Status } from './newLesson/class';
import { FCWT } from './newWeather/fcwt';
import { Studentcomponent } from './students/st-components';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  // khai bao các component
  declarations: [
    AppComponent,
    XyzComponent,
    Classroom,
    Studentcomponent,
    Status,
    FCWT,
    ChildFCWT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
