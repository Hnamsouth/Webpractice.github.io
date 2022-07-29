import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './AGL/all';
import { FCWTdetailComponent } from './childNewWt/fcwtdetail.component';
import { Classroom } from './Classroom/Clr-components';
import { FCWT } from './newWeather/fcwt';

const routes: Routes = [
  {path:'weather',component:FCWT},
  {path:'class',component:Classroom},
  {path:'FCWTdetail/:id/:city',component:FCWTdetailComponent},
  {path:'categorychild',component:CategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'',component:FCWT,pathMatch:'full'},
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
  ]
})
export class AppRoutingModule { }
