import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {

  searchName = "";

  constructor(private gameName:SearchService) {
    this.searchName = gameName.getName();
  }

  updatePage(){
    this.searchName = this.gameName.getName();
  }

  ngOnInit(): void {
  }

}
