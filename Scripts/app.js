function init(){
  // Elements
  const grid = document.querySelector('.grid')

  // Variables
  const width = 13
  const cellCount = width * width
  const cells = []

  const UserClassName = 'pickle'
  const UserStartingPosition = 78
  let userCurrentPosition = UserStartingPosition

  const redClassName = 'red'
  const redStartingPosition = 82
  let redCurrentPosition = redStartingPosition

  const blueClassName = 'blue'
  const blueStartingPosition = 83
  let blueCurrentPosition = blueStartingPosition

  const yellowClassName = 'yellow'
  const yellowStartingPosition = 84
  let yellowCurrentPosition = yellowStartingPosition

  const greenClassName = 'green'
  const greenStartingPosition = 85
  let greenCurrentPosition = greenStartingPosition



  // Executions
  // Create Grid
  function createGrid(){
    for (let i = 0; i < cellCount; i++){ // Loop for the length of cellCount
      const cell = document.createElement('div') // Create a div
      cell.innerText = i // Add index as innerText
      grid.appendChild(cell) // Append cell to grid
      cells.push(cell)
    }
  }
  createGrid()
  // Create Path
  // Create path border
  function createHorizontalPath(){
  //  add horizontal borders image to div as a class
    for (let i = 0; i < cellCount; i++){
      if (i > 155 || i < 13){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 28 && i <= 31){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 33 && i <= 36){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 56){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 60){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 66){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 68 && i <= 70){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 72 && i <= 74){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 76){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 92){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 94 && i <= 96){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 98 && i <= 100){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 102){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 108){
        cells[i].classList.add('horizontal-border') 
      } else if (i === 112){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 132 && i <= 135){
        cells[i].classList.add('horizontal-border') 
      } else if (i >= 137 && i <= 140){
        cells[i].classList.add('horizontal-border') 
      }
    }
  } 
  //  add veritcal borders image to div as a class
  function createVerticalPath(){
    for (let i = 1; i < cellCount; i++){
      if (i % 13 === 0 && i <= 65){
        cells[i].classList.add('vertical-border') 
      } else if (i % 13 === 0 && i >= 91){
        cells[i].classList.add('vertical-border') 
      } else if (i % 13 === 12 && i <= 77){
        cells[i].classList.add('vertical-border') 
      } else if (i % 13 === 12 && i >= 103){
        cells[i].classList.add('vertical-border') 
      } else if (i === 41){
        cells[i].classList.add('vertical-border') 
      } else if (i === 119){
        cells[i].classList.add('vertical-border') 
      } else if (i === 82){
        cells[i].classList.add('vertical-border') 
      } else if (i === 57){
        cells[i].classList.add('vertical-border') 
      } else if (i === 109){
        cells[i].classList.add('vertical-border') 
      } else if (i === 59){
        cells[i].classList.add('vertical-border') 
      } else if (i === 111){
        cells[i].classList.add('vertical-border') 
      } else if (i === 86){
        cells[i].classList.add('vertical-border') 
      } else if (i === 49){
        cells[i].classList.add('vertical-border') 
      } else if (i === 127){
        cells[i].classList.add('vertical-border') 
      }
    }
  }
  createHorizontalPath()
  createVerticalPath()
  // Remove megaseeds
  // Add szechuan sause
  // Add Pickle
  // Remove Pickle
  // Add Red rat
  // Add blue rat
  // Add yellow rat
  // Add green rat
  // User Key movement
  // Random Movement
  // Add megaseeds
  // remove szechuan sauce










  // Events

  document.addEventListener('keydown', userKeyMovement)
}

window.addEventListener('DOMContentLoaded', init)