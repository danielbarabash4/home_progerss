import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  theEvent = '';
  text = "";
  menuIcon = 'https://cdn-icons-png.flaticon.com/512/660/660376.png';

  constructor(private gameName: SearchService) {}

  ngOnInit(): void {}

  addNewName(){
    // this.gameName.addName(this.theEvent);
    // console.log(this.gameName.getName())
    console.log(this.theEvent)
    this.text = this.theEvent;
    this.theEvent ="";
  }

  searchBar(event: any) {
    console.log(event.target.value);
    this.theEvent = event.target.value;

    this.gameName.addName(this.theEvent);
  }

  update(){
    this.gameName.addName(this.theEvent)
    console.log(this.gameName.getName())
    this.gameName.getName()
    ;
  }

}
