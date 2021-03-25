import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  usertr ='../assets/data/cric.json';
  news1 ='../assets/data/news.json';
  constructor(private http : HttpClient) { }

  rohitsharma(){
    return this.http.get(this.usertr);
  }
  news(){
    return this.http.get(this.news1);
  }
}