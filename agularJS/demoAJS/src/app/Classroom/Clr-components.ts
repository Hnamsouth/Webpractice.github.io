import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ISstudent } from "../interface/student.interface";
@Component({
  selector:'new-cpn',
  templateUrl:'./clr-cpn.html',
  styleUrls:['./clr.css']
})
export class Classroom{
  // Form
  name = new FormControl('');
  updateName() {
    // set gia tri cua name bang phuong thuc setValue()
    this.name.setValue('Nancy');
  }
  // them 1 nhom doi tuong trong form
  profile = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
  })
  onSubmit(){
    // console.warn(this.profile.value);
    console.log(this.profile.value)
    // this.profile.value tra ve 1 nhom cac doi tuong vaf gia tri duoc nhap vao tu ng dung
  }





  //
  classname='T2204M';
  classStatus=true;
  class='';
  age=15;
  floatnumber=15.256515;
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


  congtuoi(){
    this.age++;
  }
  trutuoi(){
    this.age--;
  }
  changestatus(){
    this.classStatus=!this.classStatus
    // co the dung cu phap nay voi gia tri boolen
  }
  ctt2(){
    this.classStatus=!this.classStatus
  }



}
