import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildFCWT } from './childNewWt/childFcwt';
import { Classroom } from './Classroom/Clr-components';
import { Status } from './newLesson/class';
import { FCWT } from './newWeather/fcwt';
import { Studentcomponent } from './students/st-components';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './AGL/all';
import { FormComponent } from './form/form.component';

const approuter:Routes=[
  {path:'weather',component:FCWT},
  {path:'class',component:Classroom,children:[
    {path:'weather2',component:FCWT}
  ]},
  {path:'categorychild',component:CategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'',component:FCWT}
  // {path:'cnt0',redirectTo:'weather',pathMatch:'full'},
  // {path:'cnt2',component:Cnt2}

]
@NgModule({
  // khai bao các component
  declarations: [
    AppComponent,
    Classroom,
    Studentcomponent,
    Status,
    FCWT,
    ChildFCWT,
    HomeComponent,
    CategoryComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,// su dung dieu khien Form

    RouterModule.forRoot(approuter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
