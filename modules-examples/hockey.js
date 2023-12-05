
/**
 * Represent a the scoring of a hockey game.  The two teams
 * playing are "home" and "away".
 */
export class HockeyGame{
    /**
     * Score of the "home" team
     */
    home = 0;

    /**
     * Score of the "away" team
     */
    away = 0;
    constructor(){
        this.home = 0
        this.away = 0
    }

    /**
     * Call this method when home team scores.  It will
     * increase home team score by 1 point.
     */
    homeTeamScores(){
        this.home += 1;
    }

    /**
     * Call this method when away team scores.  It will
     * increase home team score by 1 point.
     */
    awayTeamScores(){
        this.away += 1;
    }

    /**
     * Returns winner of the game.
     * 
     * @returns {string} the name of the winner team.  Either "home", "away" or "tie"
     */
    winner(){
        if(this.home > this.away){
            return "home"
        }
        if(this.away > this.home){
            return "away"
        }
        return "tie"
    }
}
