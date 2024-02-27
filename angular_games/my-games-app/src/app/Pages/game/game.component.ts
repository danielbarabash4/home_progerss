import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../Services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  game: any = '';
  id: any = '';

  constructor(private games: GamesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOneGame();
  }

  getOneGame = async () => {
    const fullGameData = await this.games.getById(this.id);
    try {
      console.log(fullGameData);
      return (this.game = fullGameData);
    } catch (err) {
      console.log('you got an error', err);
    }
  };
}
