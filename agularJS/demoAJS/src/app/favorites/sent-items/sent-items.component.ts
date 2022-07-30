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
    info:{
      age:24,
      degree:'zxc3',

    },
    message:'Apolegy for late reponse email',
    sayHi:'Hello Colette Wooten'
  },
    {
      name:'Gemma Roberson',
      info:{
        age:24,
      },
      message:'Apolegy for late reponse email',
      sayHi:'Hello Colette Wooten'
    },
    {
    name:'Ann Garza',
    info:{
      age:24,

    },
    message:'Application for Job Tile',
    sayHi:'Hello Kerry Best'
  },
    {
    name:'Alfonso Burnett',
    info:{
      age:24,
    },
    message:'Anything I can help with',
    sayHi:'Hello Otto Ashley'
  },
    {
    name:'Rogan Espinnoza',
    info:{
      age:24,
    },
    message:'Assistant Marketing Department',
    sayHi:'Hello Kerry Best'
  },
    {
    name:'Sierra Kerr',
    info:{
      age:24,
    },
    message:'Application for Transfer',
    sayHi:'Hi Halle Lindsey'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
