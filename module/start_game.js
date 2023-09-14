
import {endTheGame} from './display_functions.js';




const startGame = {
    startPlaying: (player_zero, player_one)=>{
        const forms = document.getElementById("form"); /*variable with the forms*/
        const topOfContainer = document.querySelector(".top_part_of_container");
        let randomNumber = Math.random();/*choose randomly which palyer is going to start playing */
        let randomChoice = Math.round(randomNumber);/*choose randomly which palyer is going to start playing */
        
        
        forms.addEventListener("submit",(e)=>{
            forms.classList.toggle("hidden");
            e.preventDefault();
            player_zero.name = forms["name_player_x"].value;
            player_one.name = forms["name_player_o"].value;
            (randomChoice == 0) ? topOfContainer.textContent = player_zero.name 
            + " it's your turn to play!!!" : topOfContainer.textContent = player_one.name + " it's your turn to play!!!" ;  
            (randomChoice == 0) ? player_zero.turn = true : player_one.turn = true;
            endTheGame.switch = false;
            
            
        });
        return[player_zero, player_one]
    }
}

export default startGame;