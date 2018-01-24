import { Component } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	player: string;

	constructor(
		private api: WebService
	) {}

	submit(player) {
		this.api.getPlayer(player).subscribe((res) => {
			console.log(res);
		});
	}
}
