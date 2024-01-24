import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  gameName : any = "" ;

  constructor() {
    this.gameName = "daniel";
  }

  getName(){
    return this.gameName;

  }

  addName(newName:any){
    this.gameName = newName;
  }

}
