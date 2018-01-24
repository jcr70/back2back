import { Component } from '@angular/core';
import { WebService } from '../services/web.service';
import { PlayerModel } from '../models/PlayerModel';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	player: PlayerModel;

	constructor(
		private api: WebService
	) {}

	submit(player) {
		this.api.getPlayer(player).subscribe((res) => {
			this.player = res;
		});
	}
}
