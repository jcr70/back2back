export class Batter {
    private name: String;
    private position: String;
    private hits: String;
    private homeruns: String;
    private battingAvg: String;

    
    constructor(data) {
        console.log(data);
        this.name = `${data.cumulativeplayerstats.playerstatsentry[0].player.FirstName} ${data.cumulativeplayerstats.playerstatsentry[0].player.LastName}`;
        this.position = `${data.cumulativeplayerstats.playerstatsentry[0].player.Position}`;
        this.hits = `${data.cumulativeplayerstats.playerstatsentry[0].stats.Hits['#text']}`;
        this.homeruns = `${data.cumulativeplayerstats.playerstatsentry[0].stats.Homeruns['#text']}`;
        this.battingAvg = `${data.cumulativeplayerstats.playerstatsentry[0].stats.BattingAvg['#text']}`;
        console.log(this);
    }
}