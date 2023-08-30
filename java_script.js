import diplayGridModule from './module/display_functions.js';
import startGame  from './module/start_game.js';



const makePlayers = function(name, shape, playingOrNot) {
    return {
        name: name,
        playerNumber: shape,
        turn: playingOrNot
    };
};

let players = [makePlayers(" ", 0, false), makePlayers(" ", 1, false)];  /* X is the 0 position and O is the 1 position)*/



players = diplayGridModule.cellListener(players[0], players[1]);
players = startGame.startPlaying(players[0], players[1]);







