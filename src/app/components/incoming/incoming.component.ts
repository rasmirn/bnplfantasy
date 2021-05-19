import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incoming',
  templateUrl: './incoming.component.html',
  styleUrls: ['./incoming.component.scss']
})
export class IncomingComponent implements OnInit {

  matches: Array<any> = [];
  todaysDate = Date.now()
  constructor() { }

  ngOnInit(): void {
    this.matches=[
      { team1Logo: "../../../assets/images/TechieBrains.jpg", team1: "TechieBrains", 
      team2Logo: "../../../assets/images/ARVArchers.jpg", team2: "ARVArchers", matchDate: "2021-05-20"},
      { team1Logo: "../../../assets/images/GNRLions.jpg", team1: "GNRLions", 
      team2Logo: "../../../assets/images/GPTShers.jpg", team2: "GPTShers", matchDate: "2021-05-19"},
      { team1Logo: "../../../assets/images/TechieBrains.jpg", team1: "TechieBrains", 
      team2Logo: "../../../assets/images/GPTShers.jpg", team2: "GPTShers", matchDate: "2021-05-21"}
    ]

  }

}
