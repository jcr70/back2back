import { Component } from '@angular/core';
import { WebService } from '../services/web.service';
import { PlayerModel } from '../models/PlayerModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userInput: string;
    invalidName: boolean;
    players: PlayerModel[] = [];

    constructor(private api: WebService) {
        this.invalidName = false;
    }

    submit(player) {
        this.api.getPlayer(this.userInput).subscribe(
            res => {
                this.players.push(res);
                this.invalidName = false;
            },
            err => {
                this.invalidName = true;
            }
        );
    }

    clear() {
        this.players = [];
    }
}
