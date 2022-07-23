import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IScategory } from '../interface/AGL';

@Component({
  selector: 'agl-app',
  templateUrl:'./AGL.html',
})
export class AGL {
  data:IScategory|undefined;

  constructor (private http:HttpClient){
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<IScategory>(url)
    .subscribe(value =>{
      this.data=value;
      console.log(this.data);
    })
    const url2 = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<IScategory>(url)
    .subscribe(value =>{
      this.data=value;
      console.log(this.data);
    })

  }
}
