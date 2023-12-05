
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

/**
 * Class representing a simple hockey player.  The hockey player
 * has a name (first and last) and a date of birth.
 */
export class HockeyPlayer{
    /**
     * the fist name of the player.
     */
    firstName = ""
    /**
     * the last name of the player.
     */
    lastName = ""

    /**
     * the date of birth of the player.
     */
    dateOfBirth = null;

    /**
     * 
     * @param {String} firstName the first name of the player
     * @param {String} lastName  the last name of the player
     * @param {Date} dateOfBirth the birth date of the player
     */
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    /**
     * the full name of the player.
     */
    get name(){
        return this.firstName + " " + this.lastName
    }

    /**
     * Returns the current age of the player in years.
     */
    currentAge(){
        let now = Date.now();
        let numberOfMillisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
        return Math.floor((now - this.dateOfBirth.getTime()) / numberOfMillisecondsPerYear);
    }
}
