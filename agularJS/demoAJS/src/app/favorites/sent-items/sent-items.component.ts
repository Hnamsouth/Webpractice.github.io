import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-items',
  templateUrl: './sent-items.component.html',
  styleUrls: ['./sent-items.component.css']
})
export class FVRSentItemsComponent implements OnInit {
  items =[
    {
    name:'Gemma Roberson',
    message:'Apolegy for late reponse email',
    sayHi:'Hello Colette Wooten'
  },
    {
    name:'Ann Garza',
    message:'Application for Job Tile',
    sayHi:'Hello Kerry Best'
  },
    {
    name:'Alfonso Burnett',
    message:'Anything I can help with',
    sayHi:'Hello Otto Ashley'
  },
    {
    name:'Rogan Espinnoza',
    message:'Assistant Marketing Department',
    sayHi:'Hello Kerry Best'
  },
    {
    name:'Sierra Kerr',
    message:'Application for Transfer',
    sayHi:'Hi Halle Lindsey'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
