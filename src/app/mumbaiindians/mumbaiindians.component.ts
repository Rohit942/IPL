import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
@Component({
  selector: 'app-mumbaiindians',
  templateUrl: './mumbaiindians.component.html',
  styleUrls: ['./mumbaiindians.component.css']
})
export class MumbaiindiansComponent implements OnInit {

 
  usertesrt:any;
  
  constructor(private Players : PlayersService) { }

  ngOnInit(): void {}

  sunction(){
    this.Players.rohitsharma().subscribe(
      response => {
        console.log(response);
        this.usertesrt = response;
      });
  }

}
