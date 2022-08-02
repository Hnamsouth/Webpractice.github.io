import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './AGL/all';
import { FCWTdetailComponent } from './childNewWt/fcwtdetail.component';
import { Classroom } from './Classroom/Clr-components';
import { FVRInboxComponent } from './favorites/inbox/inbox.component';
import { SentItemsDetailComponent } from './favorites/sent-items-detail/sent-items-detail.component';
import { FVRSentItemsComponent } from './favorites/sent-items/sent-items.component';
import { DeletedItemsComponent } from './John/deleted-items/deleted-items.component';
import { DraftsComponent } from './John/drafts/drafts.component';
import { InboxComponent } from './John/inbox/inbox.component';
import { OutBoxComponent } from './John/out-box/out-box.component';
import { SentsItemsComponent } from './John/sents-items/sents-items.component';
import { FCWT } from './newWeather/fcwt';

const routes: Routes = [
  {path:'weather',component:FCWT},
  {path:'class',component:Classroom},
  {path:'FCWTdetail/:id/:city',component:FCWTdetailComponent},
  {path:'categorychild',component:CategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'',component:FCWT,pathMatch:'full'},
  // {path:'favorites0',component:FVRInboxComponent},
  // {path:'favorites1',component:FVRSentItemsComponent},
  // {path:'john0',component:InboxComponent},
  // {path:'john1',component:DraftsComponent},
  // {path:'john2',component:DeletedItemsComponent},
  // {path:'john3',component:SentsItemsComponent},
  // {path:'john4',component:OutBoxComponent},
  // {path:'detail/:id',component:SentItemsDetailComponent},
  // {path:'',component:FVRSentItemsComponent}
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
  ]
})
export class AppRoutingModule { }
