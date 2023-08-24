const diplayGridModule = {
    cellListener: ()=> {
        const gridCells = document.querySelectorAll(".grid_item");
        gridCells.forEach(cell => {
            cell.addEventListener('click', () => {
            // Your event handling code here
            console.log('Button "${cell.textContent}" clicked.');
            });
    })
}
}

export default diplayGridModule;