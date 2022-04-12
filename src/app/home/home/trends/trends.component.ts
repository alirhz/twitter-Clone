import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  trends: any = [{
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
