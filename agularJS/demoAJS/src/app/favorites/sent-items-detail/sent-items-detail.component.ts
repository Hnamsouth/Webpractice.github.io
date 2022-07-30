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
  //  JSON fake server
  url='http://localhost:3000/profile';
  details!:Profile[]|undefined;
  workExpreience!:WorkExpreience[]|undefined;
  education!:Education[]|undefined;
  dataDetails!:Profile;
  namejob:string|undefined='';
  color='#0d6efd';
  allcolor=['#6f42c1','#d63384','#fd7e14','#198754','#0d6efd']

  // Dung local Storge
  constructor(private route:ActivatedRoute, private http:HttpClient) {
    let s=JSON.parse(localStorage.getItem('items')!);
    console.log(s[0])
    this.route.params.subscribe(param=>{
      this.color=this.allcolor[param['id']];
      this.dataDetails=s[param['id']];
      console.log(this.dataDetails?.name)
      this.education=this.dataDetails?.info?.education;
      this.workExpreience=this.dataDetails?.info?.workExpreience;
      this.namejob= this.dataDetails?.info?.workExpreience[0].describe.namejob;
    });
    }

  ngOnInit(): void {
    // this.route.params.subscribe(param=>{
    //   this.http.get<Profile[]>(this.url)
    //   .subscribe(value =>{
    //     value.forEach((elm,index )=>{
    //       if(index==param['id']){
    //         this.dataDetails=elm;
    //         this.education=elm?.info?.education;
    //         this.workExpreience=elm?.info?.workExpreience;
    //         this.namejob= this.workExpreience[0].describe.namejob;
    //       }
    //     })
    //   });
    // });
  };
}
