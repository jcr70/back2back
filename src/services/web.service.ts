import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { PlayerModel } from '../models/PlayerModel';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WebService {
    private username: string = environment.username;
    private password: string = environment.password;
    private url: string = environment.url;

    constructor(private http: HttpClient) {}

    getPlayer(player) {
        let headers = this.headers();
        let url = this.urlBuilder(player);

        return this.http
            .get(url, { headers: headers })
            .map(data => {
                return new PlayerModel(data);
            })
            .catch((error: Response) => {
				return Observable.throw(error)
			});
    }

    headers(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders();
        return headers.set(
            'Authorization',
            'Basic ' + btoa(this.username + ':' + this.password)
        );
    }

    urlBuilder(player) {
        // return 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2016-regular/cumulative_player_stats.json?player=Trout';
        // return `${this.url}/${this.year}-${this.type}/cumulative_player_stats.json?player=${this.player}`;
        return `${this.url}/2017-regular/cumulative_player_stats.json?player=${player}`;
    }
}
