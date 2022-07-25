import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { data1, IScategory } from '../interface/AGL';
import { DataRice, Food } from '../interface/AGLcnt';
import { Data, Food1, IScnt2 } from '../interface/AGLcnt2';

@Component({
  selector: 'category-app',
  templateUrl: './all.html',
  styleUrls:['./agl1.css']
})

export class CategoryComponent implements OnInit {
  datamenu:data1[]|undefined;
  fooddata:Food[]|undefined;
  api=['https://foodgroup.herokuapp.com/api/category/1',
  '',
  'https://foodgroup.herokuapp.com/api/today-special',]
  changecnt(index:number){
      if(index==2){
        this.http.get<DataRice>(this.api[index])
        .subscribe(value =>{this.fooddata=value.data;
          console.log(this.fooddata)
        })
      }else if(index==0){
        this.http.get<IScnt2>(this.api[index])
        .subscribe(vl =>{
          this.fooddata=vl.data.foods;
          console.log(this.fooddata)
        })
      }

  };
  constructor (private http:HttpClient){
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<IScategory>(url)
    .subscribe(value =>{
      this.datamenu=value.data
    });
    this.changecnt(0);

  }
  ngOnInit() { }
}
