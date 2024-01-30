import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private gameNameSource = new BehaviorSubject<string>("");
currentGameName = this.gameNameSource.asObservable();

  constructor() { }

  newGameName(msg:string){
    this.gameNameSource.next(msg);
  }

}
