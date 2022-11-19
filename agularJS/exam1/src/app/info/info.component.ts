import { Component, Input, OnInit } from '@angular/core';
import { InfoITF, Profile } from '../interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() data!:any;
  constructor() {

   }

  ngOnInit(): void {

  }

}
