import { Component, Input } from "@angular/core";
import { List } from "../interface/FCwt";

@Component({
  selector:"child-fcwt",
  templateUrl:"./childprwt.html",
  styleUrls:["./childwt.css"]
})
export class ChildFCWT{
  @Input()
  data!:List;
}
