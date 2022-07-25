import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [

    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[
  ]
})
export class AppRoutingModule { }
