import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gamesByPages = "https://api.rawg.io/api/games?key=1b0ca81249a7422b8cce51789de7c78a&dates=2018-01-01,2018-12-31&ordering=-added&page=1"
  gameApi = "https://api.rawg.io/api/games?key=1b0ca81249a7422b8cce51789de7c78a&dates=2019-09-01,2019-09-30&platforms=18,1,7";
  theFullApi= `https://api.rawg.io/api/games/{item.id}key=1b0ca81249a7422b8cce51789de7c78a`;
  apiById = 'https://api.rawg.io/api/games/' ;
  apiKey = '?key=1b0ca81249a7422b8cce51789de7c78a';

  constructor() { }

  getGames= async () =>{
    try{
      const response = await axios.get(this.gamesByPages);
      return response.data.results;
    }
    catch(err){
      console.log("your error :",err)
    }
  }

  getById = async (id:string) =>{
    try{
      const response = await axios.get(this.apiById + id + this.apiKey);
      return response.data;
    }
    catch(err){
      console.log("your error :",err)
    }

//    console.log( this.apiById + id + this.apiKey)
  }

}
