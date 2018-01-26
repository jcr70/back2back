import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../models/PlayerModel';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private players: PlayerModel[] = [];

  @Input()
    set player(player: PlayerModel) {
      this.players.push(player);
    }

  constructor() { 
  }

  ngOnInit() {

  }

}
