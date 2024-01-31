import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { GamesService } from '../../Services/games.service';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent implements OnInit {
  searchBar = '';
  theGames: any = "";

  // testArray =
  // ["1","2","3","4",
  // "5","6","7","8",
  // "9","10","11","12",
  // "13","14","15","16",
  // "17","18","19","20"]

  constructor(private games: GamesService, private gameName: SearchService) {
    this.gameName.currentGameName.subscribe((msg) => (this.searchBar = msg));
    this.theGames = this.games.getGames();
  }

  ngOnInit(): void {
    this.getGamesInfo();
  }

  //API call for the game list
  getGamesInfo = async () => {
    const fullData = await this.games.getGames();
    try {
      console.log(fullData)
      return (this.theGames = fullData);
    } catch (err) {
      console.log('you got an error', err);
    }
  }
}
