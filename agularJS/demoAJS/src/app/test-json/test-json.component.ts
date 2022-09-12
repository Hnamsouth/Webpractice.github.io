import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ISsentItemDetail } from '../interface/sentItemsDetail';
import test from './test.json'

@Component({
  selector: 'app-test-json',
  templateUrl: './test-json.component.html',
  styleUrls: ['./test-json.component.css'],
})

export class TestJSONComponent implements OnInit {
  data:ISsentItemDetail=test;
  time='';

  constructor() {
    var tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+22);

    // console.log(tomorrow)
    // console.log(JSON.stringify(test))
   }

  ngOnInit(): void {

  }

}
