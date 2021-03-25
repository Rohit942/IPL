import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-delhicapitals',
  templateUrl: './delhicapitals.component.html',
  styleUrls: ['./delhicapitals.component.css']
})
export class DelhicapitalsComponent implements OnInit {
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
