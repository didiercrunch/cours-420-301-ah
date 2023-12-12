import {HockeyGame} from "https://cdn.jsdelivr.net/gh/didiercrunch/cours-420-301-ah@006.1/modules-examples/mod.js";

let game1 = new HockeyGame();
let game2 = new HockeyGame();
game1.awayTeamScores();
game1.homeTeamScores();
game2.homeTeamScores()
game1.homeTeamScores();
game1.awayTeamScores();
game2.homeTeamScores()
game1.homeTeamScores();
console.log(`Le gagnant de la partie 1 est: ${game1.winner()}`)
console.log(`Le gagnant de la partie 2 est: ${game2.winner()}`)