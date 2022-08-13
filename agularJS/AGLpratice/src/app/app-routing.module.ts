import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './AGL/all';
import { FCWTdetailComponent } from './childNewWt/fcwtdetail.component';
import {  ClassroomComponent } from './Classroom/Clr-components';
import { FCWT } from './newWeather/fcwt';

const routes: Routes = [
  {path:'weather',component:FCWT},
  {path:'class',component:ClassroomComponent},
  {path:'FCWTdetail/:id/:city',component:FCWTdetailComponent},
  {path:'categorychild',component:CategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'',component:FCWT,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
