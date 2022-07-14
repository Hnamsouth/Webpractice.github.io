import { Component } from "@angular/core";
@Component({
  selector:'app-student',
  // khi gọi đên selector đã trọn sẽ lấy nguyên template vào
  //template:'<h1>hello</h1>',
  templateUrl:'./students-components.html'
})
// tạo 1 component và phải khai báo trong trong module gốc app.module.ts
export class Studentcomponent{
  studentname='hoang nam';
  studentage=27;
  phonenumber='0667356503';
  addage(){
    this.studentage+=1;
  }
  subage(){
    this.studentage-=1;
  }
}

