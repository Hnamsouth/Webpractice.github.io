import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, importProvidersFrom } from '@angular/core';
import { __importDefault } from 'tslib';
import { ISClassname } from './interface/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent {
  favoritesList=['Inbox','Sent Items']
  JohnList=['Inbox','Drafts','Deleted Items','Sent Items','OutBox'];
  displaybars='none';

  constructor (private http:HttpClient){

  }
  show(){
  this.displaybars=this.displaybars==='none'?'block':'none';
  }
}

