function init(){
  // Elements
  const grid = document.querySelector('.grid')
  const start = document.getElementById('start')
  const scoreSpan = document.getElementById('score')
  const livesSpan = document.getElementById('lives')

  // Variables
  const width = 13
  const cellCount = width * width
  const cells = []

  let lives = 3
  let score = 0
  let highScore = 0

  const seedScore = 10
  const sauceScore = 10


  const userClassName = 'pickle'
  const userStartingPosition = 78
  let userCurrentPosition = userStartingPosition

  const redClassName = 'red'
  const redStartingPosition = 19
  let redCurrentPosition = redStartingPosition

  const blueClassName = 'blue'
  const blueStartingPosition = 84
  let blueCurrentPosition = blueStartingPosition

  const yellowClassName = 'yellow'
  const yellowStartingPosition = 83
  let yellowCurrentPosition = yellowStartingPosition

  const seedClassName = 'seed'

  


  // Executions

  // Start game
  function startGame(){
  // get rats to start moving
  // check lives

  }

  // Create Grid
  function createGrid(startPosition){
    for (let i = 0; i < cellCount; i++){ // Loop for the length of cellCount
      const cell = document.createElement('div') // Create a div
      cell.innerText = i // Add index as innerText
      grid.appendChild(cell) // Append cell to grid
      cells.push(cell)
    }

    addPickle(startPosition)
  }


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
  
  
  // Add Pickle
  function addPickle(cellPosition){
    cells[cellPosition].classList.add(userClassName)
  }

  // Remove Pickle
  function removePickle(cellPosition){
    cells[cellPosition].classList.remove(userClassName)
  }

  // User Key movement
  function userKeyMovement(event){
  // Remove existing pickle
    removePickle(userCurrentPosition)

    const key = event.keyCode 
    const right = 39
    const left = 37
    const up = 38
    const down = 40

    const horizontalRight = cells[userCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[userCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[userCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[userCurrentPosition - 1].classList.contains('vertical-border')

    const horizontalTop = cells[userCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[userCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[userCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[userCurrentPosition + width].classList.contains('vertical-border')
    
    const meetRedRight = cells[userCurrentPosition + 1].classList.contains('red')
    const meetRedLeft = cells[userCurrentPosition - 1].classList.contains('red')
    const meetRedTop = cells[userCurrentPosition - width].classList.contains('red')
    const meetRedBottom = cells[userCurrentPosition + width].classList.contains('red')

    const meetSeedRight = cells[userCurrentPosition + 1].classList.contains('seed')
    const meetSeedLeft = cells[userCurrentPosition - 1].classList.contains('seed')
    const meetSeedTop = cells[userCurrentPosition - width].classList.contains('seed')
    const meetSeedBottom = cells[userCurrentPosition + width].classList.contains('seed')

    if (key === right && userCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){
      if (meetRedRight){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
      } else if (meetSeedRight){
        cells[userCurrentPosition + 1].classList.remove(seedClassName)
        userCurrentPosition++
        score += seedScore
        scoreSpan.innerText = Number(scoreSpan.innerText) + score
      } else {
        userCurrentPosition++
        
      }
    } else if (key === left && userCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){
      userCurrentPosition--
    } else if (key === up && userCurrentPosition >= width && !horizontalTop && !verticalTop){
      userCurrentPosition -= width
    } else if (key === down && userCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){
      userCurrentPosition += width
    } 

    addPickle(userCurrentPosition)
    
  }


  


  
  // Add Red rat
  function addRedRat(cellPosition){
    cells[cellPosition].classList.add(redClassName)
  }
  // Remove Red Rat
  function removeRedRat(cellPosition){
    cells[cellPosition].classList.remove(redClassName)
  }

  // Add blue rat
  // Remove blue rat

  // Add yellow rat
  // remove yellow rat

  // Random Movement
  function redRandomMovement(){
    
    removeRedRat(redCurrentPosition)
  
    const movementOptions = [1, -1, width, -width]
    const randomMovement = movementOptions[Math.floor(Math.random() * movementOptions.length)]
  
    const horizontalRight = cells[redCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[redCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[redCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[redCurrentPosition - 1].classList.contains('vertical-border')
  
    const horizontalTop = cells[redCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[redCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[redCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[redCurrentPosition + width].classList.contains('vertical-border')
      
    // Add arguments to check for if userCurrentPosition is larger or smaller than rat position
    if (randomMovement === 1 && redCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){
      redCurrentPosition++
    } else if (randomMovement === -1 && redCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){
      redCurrentPosition--
    } else if (randomMovement === -width && redCurrentPosition >= width && !horizontalTop && !verticalTop){
      redCurrentPosition -= width
    } else if (randomMovement === width && redCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){
      redCurrentPosition += width
    } 
  
    addRedRat(redCurrentPosition)
      
  }

  // Move red rat on interval
  function moveRedRat (){
    const redInterval = setInterval(() => {
      redRandomMovement()
    }, 350)
  }
  
  
  // Add megaseeds
  function addSeed(){
    for (let i = 0; i < cellCount; i++){
      if (i >= 79 && i <= 81){
        cells[i].classList.add(seedClassName) 
      } 
    }
  }

  // Add szechuan sauce













  // Events

  document.addEventListener('keydown', userKeyMovement)
  document.addEventListener('click', startGame)

  createGrid(userStartingPosition)
  createHorizontalPath()
  createVerticalPath()
  addRedRat(redCurrentPosition)
  addSeed()
  
}

window.addEventListener('DOMContentLoaded', init)