import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  searchName = "";

  testArray =
  ["1","2","3","4",
  "5","6","7","8",
  "9","10","11","12",
  "13","14","15","16",
  "17","18","19","20"]

  constructor(private gameName:SearchService) {
    this.gameName.currentGameName.subscribe(msg => this.searchName = msg)
  }

  ngOnInit(): void {

  }

}
