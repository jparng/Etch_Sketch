//constants
const container = document.querySelector('.container');
const grid = document.getElementById('grid');
const cells = document.querySelectorAll('div.grid-cell');

//creates the grid
function makeRows(rows, cols) {
    for (let r = 0; r < rows; r++) {
        let row = document.createElement('div');
        row.className = "grid-row";
        row.style.height = (500 / cols) + "px";
      for (let c = 0; c < cols; c++) {
        let cell = document.createElement('div');
        cell.className = "grid-cell";
        cell.style.width =  (500/ cols) + "px";
        cell.style.height =  (500 / cols) + "px";
        row.appendChild(cell);
        
      }
      grid.appendChild(row);
      grid.addEventListener('mouseover', draw);
    }
    return grid;
  }
window.onload = makeRows(16, 16); // When the window is refreshed, the grid is made 16 X 16.


function draw(e) {
   if(e.target.className === "grid-cell"){
         e.target.style.backgroundColor = 'black'; // The color for drawing on the grid is black.
            }
        };
    
        let reset = document.getElementById('reset');      //The reset button
        reset.addEventListener('click', newRows);

function newRows(e){
    grid.innerHTML= '';   //This causes the grid values to equal ''.
    makeRows(16,16);
    diffRows();       //Recreates the  grid without colors.

}

function diffRows(e){
    let addPix = prompt('How many squares do you want?');
    if(addPix != null){
        grid.innerHTML = ''; // If user doesn't input any number, the grid will refresh to 16 X 16 squares.
        makeRows(16,16);
    }
   if(addPix <= 0){
      grid.innerHTML='';
      alert('Please enter a valid integer! Returns 16 squares.');
      makeRows(16,16);
  }
    else{
    grid.innerHTML='';
    makeRows(addPix, addPix);
    }
   console.log(addPix);
}


