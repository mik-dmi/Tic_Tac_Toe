

const endTheGame = {
    switch: false
  };
  

function checkScore(allTheCells, displayTheWinner, playerX ,playerO){
    const winningCombos = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],
        [0, 3, 6],[1, 4, 7], [2, 5, 8],
        [0, 4, 8],[2, 4, 6]
    ];
    let aux = false;
    
    winningCombos.forEach(winningSequence=>{
        let xWins = winningSequence.every(square =>{
            
            return allTheCells[square].textContent === "X" 
        })
        let oWins = winningSequence.every(square =>{
           
           
            return allTheCells[square].textContent === "O" 
        })
   
        if(xWins){ 
            displayTheWinner.textContent = playerX.name + " IS THE WINNER!!!"
            aux = true;
    };
        if(oWins){ 
            displayTheWinner.textContent = playerO.name + " IS THE WINNER!!!"
            aux = true;
        }    
    }) 
    return aux;  
}

function reset(startDisplay, containerForDisplay){
    const startButton = document.getElementById("form");
    
}




const diplayGridModule = {
    cellListener: (first_player, second_player )=> {
        const gridCells = document.querySelectorAll(".grid_item");
        const topOfContainer = document.querySelector(".top_part_of_container");
        const startButton = document.getElementById("form");

        gridCells.forEach(cell => {
            cell.addEventListener('click', function(){
/*--------------------------------------- Some rule of tic tac toe ---------------------------------------------*/
            console.log("Before " +endTheGame.switch  )
            if(!endTheGame.switch){   
                
                if( cell.textContent != "O" && cell.textContent != "X" ){  
                    if (first_player.turn == true){
                        cell.textContent = "X"
                        first_player.turn = false;
                        second_player.turn = true;
                        topOfContainer.textContent = second_player.name + " it's your turn to play!!!"
                    }
                    else if (second_player.turn == true){
                        cell.textContent = "O"
                        second_player.turn = false;
                        first_player.turn = true;
                        topOfContainer.textContent = first_player.name + " it's your turn to play!!!"
                    }
                    console.log("BEFORE CHECKING SCORES" + endTheGame.switch);
                    endTheGame.switch = checkScore(gridCells, topOfContainer, first_player, second_player);
                    console.log("AFERTER CHECK SCORES" + endTheGame.switch);
                    
                }
                if(endTheGame.switch == false ){
                    for (const cell of gridCells){
                        if (cell.textContent !== "X" && cell.textContent !== "O") { // Found an empty cell4
                            endTheGame.switch == false;
                            
                        }
                        else{
                            endTheGame.switch == true;
                        
                        }
                    }   
                }
                
            }
               /* if(endTheGame.switch){
                    gridCells.forEach(square => square.replaceWith(square.cloneNode(true))); */   /*takes out the listener*/
                    
                //}
/*--------------------------------------- Some rule of tic tac toe ---------------------------------------------*/
            });
            
         })
         
         return;      
    },
    reset:(resetTemplate)=>{
        const grid = document.querySelector(".grid")
        const topOfContainer = document.querySelector(".top_part_of_container");
        const forms = document.getElementById("form"); 
        const gridCells = document.querySelectorAll(".grid_item");
        gridCells.forEach(cell =>{
            cell.textContent = "";
        })
        topOfContainer.textContent = ""
        forms.classList.toggle("hidden");
        forms.reset()
        
        
        
        return [resetTemplate, resetTemplate];
    }
}



export default diplayGridModule;
export { endTheGame };