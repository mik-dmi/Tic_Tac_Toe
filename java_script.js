import diplayGridModule from './module/display_functions.js';
import startGame  from './module/start_game.js';



const players = function (name, shape) {
    this.name = name;
    this.name = shape;

}


diplayGridModule.cellListener();
startGame.startPlaying();

