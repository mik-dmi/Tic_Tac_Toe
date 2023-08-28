import diplayGridModule from './module/display_functions.js';
import startGame  from './module/start_game.js';



const players = function (name, shape , playingOrNot) {
    this.name = name;
    this.playerNumber = shape;
    this.turn = playingOrNot; 
}

aplayer_x = players(" as ", "0", "false");
player_o = players("as ", "1", "false");


diplayGridModule.cellListener();
playerPlaying = startGame.startPlaying(player_x, player_o);



