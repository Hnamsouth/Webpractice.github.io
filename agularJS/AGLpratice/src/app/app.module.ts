import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './AGL/all';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildFCWT } from './childNewWt/childFcwt';
import { FCWTdetailComponent } from './childNewWt/fcwtdetail.component';
import {  ClassroomComponent } from './Classroom/Clr-components';
import { FCWT } from './newWeather/fcwt';
import { Studentcomponent } from './students/st-components';

@NgModule({
  declarations: [
    AppComponent,
    ChildFCWT,
    FCWT,
    FCWTdetailComponent,
    ClassroomComponent,
    Studentcomponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
