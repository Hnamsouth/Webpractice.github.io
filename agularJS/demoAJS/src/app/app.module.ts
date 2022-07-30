import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

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
import { RouterTestingModule } from '@angular/router/testing';
import { FCWTdetailComponent } from './childNewWt/fcwtdetail.component';
import { FVRInboxComponent } from './favorites/inbox/inbox.component';
import { FVRSentItemsComponent } from './favorites/sent-items/sent-items.component';
import { InboxComponent } from './John/inbox/inbox.component';
import { SentsItemsComponent } from './John/sents-items/sents-items.component';
import { DeletedItemsComponent } from './John/deleted-items/deleted-items.component';
import { DraftsComponent } from './John/drafts/drafts.component';
import { OutBoxComponent } from './John/out-box/out-box.component';
import { SentItemsDetailComponent } from './favorites/sent-items-detail/sent-items-detail.component';

const approuter:Routes=[



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
    FCWTdetailComponent,
    FVRInboxComponent,
    FVRSentItemsComponent,
    InboxComponent,
    SentsItemsComponent,
    DeletedItemsComponent,
    DraftsComponent,
    OutBoxComponent,
    SentItemsDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

    // su dung dieu khien Form

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
