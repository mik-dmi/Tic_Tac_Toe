
const diplayGridModule = {
    cellListener: (first_player, second_player)=> {
        const gridCells = document.querySelectorAll(".grid_item");
        const playerTurnDiplay  = document.querySelector(".display_turn");
        gridCells.forEach(cell => {
            cell.addEventListener('click', () => {
/*--------------------------------------- Some rule of tic tac toe ---------------------------------------------*/
                if( cell.textContent == "O" || cell.textContent == "X" ){
        
                }
                else{

                    if (first_player.turn == true){
                        cell.textContent = "X"
                        first_player.turn = false;
                        second_player.turn = true;
                        playerTurnDiplay.textContent = second_player.name + " it's your turn to play!!!"

                    }
                    else if (second_player.turn == true){
                        cell.textContent = "O"
                        second_player.turn = false;
                        first_player.turn = true;
                        playerTurnDiplay.textContent = first_player.name + " it's your turn to play!!!"
                        

                    }
                }
 
/*--------------------------------------- Some rule of tic tac toe ---------------------------------------------*/
            });
         })
         
         return[first_player, second_player];

        
    }}

export default diplayGridModule;