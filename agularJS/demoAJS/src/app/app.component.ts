import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, importProvidersFrom } from '@angular/core';
import { __importDefault } from 'tslib';
import { Profile } from './interface/sentItemsDetail';
import { ISClassname } from './interface/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent {
  favoritesList=['Inbox','Sent Items']
  JohnList=['Inbox','Drafts','Deleted Items','Sent Items','OutBox'];
  displayFVR='block';
  displayJohn='none';
 test={
  name:'hiashdiasnd'
 }

  constructor (private asfasf:HttpClient){

  }
  show(value:string){

    if(value==='displayFVR'){
      this.displayFVR=this.displayFVR==='none'?'block':'none';
    }else if (value==='displayJohn'){
      this.displayJohn=this.displayJohn==='none'?'block':'none';
    }
  }
  render(){
    let url='http://localhost:3000/profile';
    this.asfasf.get<Profile>(url).subscribe(dasdsad =>{
      console.log(dasdsad)
    })
  }
}

