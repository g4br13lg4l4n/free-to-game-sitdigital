import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  @Input() listGames:Game[] = [];
  constructor() { }
  ngOnInit(): void {

  }
}
