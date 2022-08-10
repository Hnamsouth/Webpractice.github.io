import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForeCastWT, List } from 'src/app/interface/wt';
@Component({
  selector: 'app-fcwtdetail',
  templateUrl: './fcwtdetail.component.html',
  styleUrls: ['./fcwtdetail.component.css']
})
export class FCWTdetailComponent implements OnInit {
  fcwtdetails!:List;
  country='';
  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param =>{
      console.log(param)
      const url = 'https://api.openweathermap.org/data/2.5/forecast';
      let params = new HttpParams();
      params =  params.append('q',param['city']);
      params =  params.append('appid','09a71427c59d38d6a34f89b47d75975c');
      params =  params.append('units','metric');
      params =  params.append('lang','vi');

      this.http.get<ForeCastWT>(url,{params: params})
        .subscribe(value=>{
          this.country=value.city.name+" - "+ value.city.country;
          value.list.forEach((elm ,index) =>{
            if(index==param['id']){
              this.fcwtdetails=elm;
            }
          })
        });
    })
  }
}
