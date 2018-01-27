import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../models/PlayerModel';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent {
    private _player: PlayerModel;

    constructor() {}

    @Input()
    set player(player: PlayerModel) {
        this._player = player;
    }
}
