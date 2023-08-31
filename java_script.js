import diplayGridModule from './module/display_functions.js';
import startGame  from './module/start_game.js';
import {endTheGame} from './module/display_functions.js';

function makeGrid(){
    const gridContainer = document.querySelector(".grid");
    
// Loop to create and add grid items
    for (let i = 0; i < 9; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid_item");
        gridCell.id = i.toString();
        gridContainer.appendChild(gridCell);
    }
    
 }





const makePlayers = function(name, shape, playingOrNot) {
    return {
        name: name,
        playerNumber: shape,
        turn: playingOrNot
    };
};
const resetPlayer = makePlayers(" ", 0, false);
let players = [makePlayers(" ", 0, false), makePlayers(" ", 1, false)];  /* X is the 0 position and O is the 1 position)*/

let aux = [];


makeGrid();
players = startGame.startPlaying(players[0], players[1]);
 diplayGridModule.cellListener(players[0], players[1]);




const resetButton = document.querySelector(".resetButton")
resetButton.addEventListener('click', () => {
    console.log("main 1 "+ endTheGame.switch )
    aux = diplayGridModule.reset( resetPlayer);
    players[0] = aux[0];
    players[1] = aux[1];
  

    console.log("main 2 "+ endTheGame)
})



