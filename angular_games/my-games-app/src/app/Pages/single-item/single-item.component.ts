import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.scss',
})
export class SingleItemComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}

  gameClicked() {
    console.log('you clicked the game', this.item.name);
  }
}
