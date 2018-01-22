import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class WebService {
    private username: string = environment.username;
    private password: string = environment.password;
    private url: string = environment.url;

    constructor(private http: HttpClient) {}

    getPlayer() {
        let headers = this.headers();
        let url = this.urlBuilder();
        this.http.get(url, { headers: headers }).subscribe(data => {
            console.log(data);
        });
    }

    headers(): HttpHeaders {
        let headers: HttpHeaders = new HttpHeaders();
        return headers.set(
            'Authorization',
            'Basic ' + btoa(this.username + ':' + this.password)
        );
    }

    urlBuilder() {
      return 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2016-regular/cumulative_player_stats.json?player=Trout';
        // return `${this.url}/${this.year}-${this.type}/cumulative_player_stats.json?player=${this.player}`;
    }
}
