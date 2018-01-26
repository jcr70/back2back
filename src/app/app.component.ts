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
	player: PlayerModel;
	invalidName: boolean;

    constructor(private api: WebService) {
		this.invalidName = false;
	}

    submit(player) {
        this.api.getPlayer(this.userInput)
            .subscribe(res => {
				this.invalidName = false;
                this.player = res;
			},
			err => {
				this.invalidName = true;
			});
    }
}
