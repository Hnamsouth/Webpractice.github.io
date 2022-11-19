import { Component } from '@angular/core';
import profile from 'data.json'
import { Profile } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam1';
  datainfo:Profile|undefined;
  data=[
    {
      name: "Margaret",
      title: "Sales Respresentative",
      date: "10/5/1996",
      address: "7 Houndtood Rd",
      city: "London",
      Phone: "(71) 555-4444",
      img: "assets/img/human2.png",
    },{
      name: "Albert",
      title: "Sales Respresentative",
      date: "10/5/1996",
      address: "7 Houndtood Rd",
      city: "London",
      Phone: "(71) 555-4444",
      img: "assets/img/human3.png",
    },
    {
      name: "Michale",
      title: "Sales Respresentative",
      date: "10/5/1996",
      address: "7 Houndtood Rd",
      city: "London",
      Phone: "(71) 555-4444",
      img: "assets/img/human4.png",
    }
  ]
  constructor(){
    this.datainfo=this.data[0];
  }

  onClick(index:any){
    this.datainfo=this.data[index-1];
  }
}
