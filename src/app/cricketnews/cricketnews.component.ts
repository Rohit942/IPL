import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
@Component({
  selector: 'app-cricketnews',
  templateUrl: './cricketnews.component.html',
  styleUrls: ['./cricketnews.component.css']
})
export class CricketnewsComponent implements OnInit {

  news:any;
  
  constructor(private Players : PlayersService) { }

  ngOnInit(): void {
    this.Players.news().subscribe(
      response => {
        console.log(response);
        this.news = response;
      });
    
  }

}
