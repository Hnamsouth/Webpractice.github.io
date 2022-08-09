import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FVRInboxComponent } from './favorites/inbox/inbox.component';
import { FVRSentItemsComponent } from './favorites/sent-items/sent-items.component';
import { SentItemsDetailComponent } from './favorites/sent-items-detail/sent-items-detail.component';
import { InboxComponent } from './John/inbox/inbox.component';
import { SentsItemsComponent } from './John/sents-items/sents-items.component';
import { DeletedItemsComponent } from './John/deleted-items/deleted-items.component';
import { DraftsComponent } from './John/drafts/drafts.component';
import { OutBoxComponent } from './John/out-box/out-box.component';
import { TestJSONComponent } from './test-json/test-json.component';

const approuter:Routes=[



]
@NgModule({
  // khai bao các component
  declarations: [
    AppComponent,
    FVRInboxComponent,
    FVRSentItemsComponent,
    InboxComponent,
    SentsItemsComponent,
    DeletedItemsComponent,
    DraftsComponent,
    OutBoxComponent,
    SentItemsDetailComponent,
    TestJSONComponent
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
