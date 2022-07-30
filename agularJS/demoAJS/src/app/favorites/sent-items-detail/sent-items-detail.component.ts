import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education, ISsentItemDetail, Profile, WorkExpreience } from 'src/app/interface/sentItemsDetail';

@Component({
  selector: 'app-sent-items-detail',
  templateUrl: './sent-items-detail.component.html',
  styleUrls: ['./sent-items-detail.component.css']
})
export class SentItemsDetailComponent implements OnInit {
  constructor(private route:ActivatedRoute, private http:HttpClient) { }
  url='http://localhost:3000/profile';
  details!:Profile[]|undefined;
  workExpreience!:WorkExpreience[]|undefined;
  education!:Education[]|undefined;
  dataDetails!:Profile|undefined;
  namejob='';
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.http.get<Profile[]>(this.url)
      .subscribe(value =>{
        value.forEach((elm,index )=>{
          console.log(index)
          if(index==param['id']){
            console.log(elm)
            this.dataDetails=elm;
            this.education=elm?.info?.education;
            this.workExpreience=elm?.info?.workExpreience;
            this.namejob= this.workExpreience[0].describe.namejob;
          }
        })
      });
    });
  };
}
