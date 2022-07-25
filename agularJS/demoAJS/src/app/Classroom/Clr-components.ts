import { Component, Input } from "@angular/core";
import { ISstudent } from "../interface/student.interface";
@Component({
  selector:'new-cpn',
  templateUrl:'./clr-cpn.html',

})
export class Classroom{
  classname='T2204M';
  classStatus=true;
  teacher=["hoang nam","hoang nam 1","hoang nam 2"];
  //  khai bao kieu du lieu cho moi bien cd. stdnames :string[]
 /* stdnames :string[]=[
    'Hoàng Văn Nam',
    'Vũ Trưởng Thành'
  ];
  age=[20,21];*/

  stdlist:ISstudent[]=[
    {
      stdname:"hoang nam",
      stdAge:23,
      phonenumber:'0965315131'
    },
    {
      stdname:"hoang nam2",
      stdAge:35,
      phonenumber:'0845515131'
    }
  ]


  changecln(){
    this.classname='hoangnam';
  }
  changestatus(){
    this.classStatus=!this.classStatus
    // co the dung cu phap nay voi gia tri boolen
  }
  ctt2(){
    this.classStatus=!this.classStatus
  }



}
