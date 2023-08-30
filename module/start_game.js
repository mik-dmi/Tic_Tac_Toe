const startGame = {
    startPlaying: (player_zero, player_one)=>{
        const startButton = document.getElementById("form"); /*variable with the forms*/
        const topOfContainer = document.querySelector(".top_part_of_container")
        const playerTurnDiplay  = document.createElement("div");
        playerTurnDiplay.className = "display_turn";

        let randomNumber = Math.random();/*choose randomly which palyer is going to start playing */
        let randomChoice = Math.round(randomNumber);/*choose randomly which palyer is going to start playing */
        
        startButton.addEventListener("submit",(e)=>{
            e.preventDefault();
            
            player_zero.name = startButton["name_player_x"].value;
            player_one.name = startButton["name_player_o"].value;
            startButton.remove();
            topOfContainer.appendChild(playerTurnDiplay); 
            (randomChoice == 0) ? playerTurnDiplay.textContent = player_zero.name 
            + " it's your turn to play!!!" : playerTurnDiplay.textContent = player_one.name + " it's your turn to play!!!" ;  
            (randomChoice == 0) ? player_zero.turn = true : player_one.turn = true;
   

        });
        return[player_zero, player_one]
    }
}

export default startGame;