const startGame = {
    startPlaying: ()=>{
        const startButton = document.getElementById("form");
        const topOfContainer = document.querySelector(".top_part_of_container")
        const playerTurnDiplay  = document.createElement("div");
        playerTurnDiplay.className = "display_turn";


        startButton.addEventListener("submit",(e)=>{
            e.preventDefault();
            startButton.remove();
            topOfContainer.appendChild(playerTurnDiplay);
            playerTurnDiplay.textContent="wsacxrgfsvxckjm";


            
            

        });
    }
}

export default startGame;