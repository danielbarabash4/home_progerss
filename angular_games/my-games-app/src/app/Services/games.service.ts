import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameApi = "https://api.rawg.io/api/games?key=1b0ca81249a7422b8cce51789de7c78a&dates=2019-09-01,2019-09-30&platforms=18,1,7";

  constructor() { }

  getGames= async () =>{
    try{
      const response = await axios.get(this.gameApi);
      return response.data.results;
    }
    catch(err){
      console.log("your error ._. :",err)
    }
  }

}
