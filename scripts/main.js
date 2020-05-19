const gridContainer = document.querySelector('#gridContainer');
const clearBtn = document.querySelector('button');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let squareCountX = 16;
let squareCountY = 16;
let squareCountTotal = squareCountX*squareCountY;

gridContainer.style['grid-template-columns'] = `repeat(${squareCountX}, 1fr)`; //initialize grid settings for container
gridContainer.style['grid-template-rows'] = `repeat(${squareCountY}, 1fr)`;

let passes = 0; // initialize pass variable and color values
let hueVal = getRandomInt(256);
let saturationVal = getRandomInt(256);
let lightnessVal = getRandomInt(256);

for (let i = 0; i < squareCountTotal; i++) { // create all div squares
  let div = document.createElement('div');
  div.classList.add('square');
  div.setAttribute('id', 'square');

  div.addEventListener('mouseover', function(e) { // add event listener to color the div background
    passes++;
    e.target.style.background = `hsl(${hueVal}, ${saturationVal}%, ${lightnessVal}%)`;
    lightnessVal -= 10; 
  });

  

  gridContainer.appendChild(div); // add the div squares to the grid
}

clearBtn.addEventListener('click', () => {
  let newSquareCountY = prompt('Enter number of vertical squares on the new grid: ');
  let newSquareCountX = prompt('Enter number of horizontal squares on the new grid: ');
  let newSquareCountTotal = newSquareCountX * newSquareCountY;
  
  while (gridContainer.firstChild) { // remove all original div squares to make room for new div squares
    gridContainer.removeChild(gridContainer.lastChild);
  }

  passes = 0; // reset passes and color values
  hueVal = getRandomInt(256);
  saturationVal = getRandomInt(256);
  lightnessVal = getRandomInt(256);
  
  gridContainer.style['grid-template-columns'] = `repeat(${newSquareCountX}, 1fr)`;
  gridContainer.style['grid-template-rows'] = `repeat(${newSquareCountY}, 1fr)`;

  for (let i = 0; i < newSquareCountTotal; i++) { // create new user-specified div squares
    let div = document.createElement('div');
    div.classList.add('square');
    div.setAttribute('id', 'square');
    div.addEventListener('mouseover', function(e) {
      passes++;
      e.target.style.background = `hsl(${hueVal}, ${saturationVal}%, ${lightnessVal}%)`;
      lightnessVal -= 10; 
    });

    gridContainer.appendChild(div); // add new div squares to the grid
  }

})