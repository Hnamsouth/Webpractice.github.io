import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Classroom } from './Classroom/Clr-components';
import { Studentcomponent } from './students/st-components';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  // khai bao các component
  declarations: [
    AppComponent,
    XyzComponent,
    Classroom,
    Studentcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
