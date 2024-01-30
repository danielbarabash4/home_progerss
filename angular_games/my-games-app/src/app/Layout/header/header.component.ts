import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/search.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  theEvent = '';

  constructor(private gameName: SearchService) {
    this.gameName.currentGameName.subscribe(msg => this.theEvent = msg)
  }

  ngOnInit(): void {
  }

  searchBar() {
    console.log(this.theEvent);
    this.gameName.newGameName(this.theEvent);
  };
}
