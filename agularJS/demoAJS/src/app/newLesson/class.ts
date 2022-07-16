import { Component, Input } from "@angular/core";
import { ISClassname } from "../datatranferObject/student.interface";
@Component({
  selector:"class-ls",
  templateUrl:"./class.html",
})
export class Status{
  @Input() data!:ISClassname;
}
