import { Component , Input } from "@angular/core";
import { ISstudent } from "../../../../demoAJS/src/app/interface/student.interface";
@Component({
  selector:'app-student',
  // khi gọi đên selector đã trọn sẽ lấy nguyên template vào
  //template:'<h1>hello</h1>',
  templateUrl:'./students-components.html'
})
// tạo 1 component và phải khai báo trong trong module gốc app.module.ts
export class Studentcomponent {
  /*studentage=27;
  phonenumber='0667356503';
  @Input("stdname") stdname ! : string;
  @Input("age") age ! : number;
  addage(){
    this.studentage+=1;
  }
  subage(){
    this.studentage-=1;
  }*/
  // ! LA BAT BUOC PHAI CO
  // ? co hoac ko co cung dc
  @Input()
  data!:ISstudent;
}

