import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../models/PlayerModel';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private _player: PlayerModel;

  @Input()
    set player(data: PlayerModel) {
      this._player = data;
    }

  constructor() { 
  }

  ngOnInit() {

  }

}
