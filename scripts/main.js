const gridContainer = document.querySelector('#gridContainer');
const clearBtn = document.querySelector('button');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let squareCountX = 16;
let squareCountY = 16;
let squareCountTotal = squareCountX*squareCountY;

let passes = 0;
let hueVal = getRandomInt(256);
let saturationVal = getRandomInt(256);
let lightnessVal = getRandomInt(256);

for (let i = 0; i < squareCountTotal; i++) {
  let div = document.createElement('div');
  div.classList.add('square');
  div.setAttribute('id', 'square');

  div.addEventListener('mouseover', function(e) {
    passes++;
    e.target.style.background = `hsl(${hueVal}, ${saturationVal}%, ${lightnessVal}%)`;
    lightnessVal -= 10; 
  });

  gridContainer.style['grid-template-columns'] = `repeat(${squareCountX}, 1fr)`;
  gridContainer.style['grid-template-rows'] = `repeat(${squareCountY}, 1fr)`;

  gridContainer.appendChild(div);
}

clearBtn.addEventListener('click', () => {
  let newSquareCountY = prompt('Enter number of vertical squares on the new grid: ');
  let newSquareCountX = prompt('Enter number of horizontal squares on the new grid: ');
  let newSquareCountTotal = newSquareCountX * newSquareCountY;

  passes = 0;
  hueVal = getRandomInt(256);
  saturationVal = getRandomInt(256);
  lightnessVal = getRandomInt(256);
  
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  gridContainer.style['grid-template-columns'] = `repeat(${newSquareCountX}, 1fr)`;
  gridContainer.style['grid-template-rows'] = `repeat(${newSquareCountY}, 1fr)`;
  for (let i = 0; i < newSquareCountTotal; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    div.setAttribute('id', 'square');
    div.addEventListener('mouseover', function(e) {
      passes++;
      e.target.style.background = `hsl(${hueVal}, ${saturationVal}%, ${lightnessVal}%)`;
      lightnessVal -= 10; 
    });

    gridContainer.appendChild(div);
  }

})