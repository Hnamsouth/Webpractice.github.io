import { Component } from "@angular/core";
@Component({
  selector:'new-cpn',
  templateUrl:'./clr-cpn.html',

})
export class Classroom{
  classname='T2204M';
  changecln(){
    this.classname='hoangnam';
  }
}
