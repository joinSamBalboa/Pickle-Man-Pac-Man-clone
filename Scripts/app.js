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
  const sauceScore = 20
  const ratScaredScore = 50


  const userClassName = 'pickle'
  const userStartingPosition = 78
  let userCurrentPosition = userStartingPosition

  const redClassName = 'red'
  const redStartingPosition = 84
  let redCurrentPosition = redStartingPosition

  const blueClassName = 'blue'
  const blueStartingPosition = 85
  let blueCurrentPosition = blueStartingPosition

  const yellowClassName = 'yellow'
  const yellowStartingPosition = 83
  let yellowCurrentPosition = yellowStartingPosition

  const seedClassName = 'seed'
  const sauceClassName = 'sauce'

  


  // Executions

  


  // Create Grid
  function createGrid(startPosition){
    for (let i = 0; i < cellCount; i++){ 
      const cell = document.createElement('div') 
      cell.innerText = i
      grid.appendChild(cell)
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

    const meetSauceRight = cells[userCurrentPosition + 1].classList.contains('sauce')
    const meetSauceLeft = cells[userCurrentPosition - 1].classList.contains('sauce')
    const meetSauceTop = cells[userCurrentPosition - width].classList.contains('sauce')
    const meetSauceBottom = cells[userCurrentPosition + width].classList.contains('sauce')

    if (key === right && userCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){
      if (meetRedRight){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedRight){
        cells[userCurrentPosition + 1].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
      } else if (meetSauceRight){
        cells[userCurrentPosition + 1].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
      }
      userCurrentPosition++
      // score += seedScore
      // scoreSpan.innerText = Number(scoreSpan.innerText) + score (Useful for accummulation for ghosts)
      
    } else if (key === left && userCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){
      if (meetRedLeft){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedLeft){
        cells[userCurrentPosition - 1].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
      } else if (meetSauceLeft){
        cells[userCurrentPosition - 1].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
      }
      userCurrentPosition--
    } else if (key === up && userCurrentPosition >= width && !horizontalTop && !verticalTop){
      if (meetRedTop){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedTop){
        cells[userCurrentPosition - width].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
      } else if (meetSauceTop){
        cells[userCurrentPosition - width].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
      }
      userCurrentPosition -= width
    } else if (key === down && userCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){
      if (meetRedBottom){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition -= width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedBottom){
        cells[userCurrentPosition + width].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
      } else if (meetSauceBottom){
        cells[userCurrentPosition + width].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
      }
      userCurrentPosition += width
    } 

    addPickle(userCurrentPosition)
    
  }


  


  
  

  
  
  // Add szechuan sauce
  function addSauce(){
    for (let i = 0; i < cellCount; i++){
      if (i === 14){
        cells[i].classList.add(sauceClassName) 
      } else if (i === 24){
        cells[i].classList.add(sauceClassName) 
      } else if (i === 144){
        cells[i].classList.add(sauceClassName) 
      } else if (i === 154){
        cells[i].classList.add(sauceClassName) 
      }
    }
  }
  // Add megaseeds
  function addSeed(){
    for (let i = 0; i < cellCount; i++){
      if (i >= 79 && i <= 81){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 15 && i <= 23){
        cells[i].classList.add(seedClassName) 
      } else if (i === 27){
        cells[i].classList.add(seedClassName) 
      } else if (i === 32){
        cells[i].classList.add(seedClassName) 
      } else if (i === 37){
        cells[i].classList.add(seedClassName) 
      } else if (i === 40){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 42 && i <= 48){
        cells[i].classList.add(seedClassName) 
      } else if (i === 50){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 53 && i <= 55){
        cells[i].classList.add(seedClassName) 
      } else if (i === 58){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 61 && i <= 63){
        cells[i].classList.add(seedClassName) 
      } else if (i === 67){
        cells[i].classList.add(seedClassName) 
      } else if (i === 75){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 87 && i <=90){
        cells[i].classList.add(seedClassName) 
      } else if (i === 93){
        cells[i].classList.add(seedClassName) 
      } else if (i === 101){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 105 && i <= 107){
        cells[i].classList.add(seedClassName) 
      } else if (i === 110){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 113 && i <= 115){
        cells[i].classList.add(seedClassName) 
      } else if (i === 118){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 120 && i <= 126){
        cells[i].classList.add(seedClassName) 
      } else if (i === 128){
        cells[i].classList.add(seedClassName) 
      } else if (i === 131){
        cells[i].classList.add(seedClassName) 
      } else if (i === 136){
        cells[i].classList.add(seedClassName) 
      } else if (i === 141){
        cells[i].classList.add(seedClassName) 
      } else if (i >= 145 && i <= 154){
        cells[i].classList.add(seedClassName) 
      }
    }
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
  function addBlueRat(cellPosition){
    cells[cellPosition].classList.add(blueClassName)
  }
  // Remove blue rat
  function removeBlueRat(cellPosition){
    cells[cellPosition].classList.remove(blueClassName)
  }

  // Add yellow rat
  function addYellowRat(cellPosition){
    cells[cellPosition].classList.add(yellowClassName)
  }
  // remove yellow rat
  function removeYellowRat(cellPosition){
    cells[cellPosition].classList.remove(yellowClassName)
  }

  // Red rat random Movement
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

    const meetuserLeft = cells[redCurrentPosition + 1].classList.contains('pickle')
    const meetuserRight = cells[redCurrentPosition - 1].classList.contains('pickle')
    const meetuserBottom = cells[redCurrentPosition - width].classList.contains('pickle')
    const meetuserTop = cells[redCurrentPosition + width].classList.contains('pickle')
      
    // Add arguments to check for if userCurrentPosition is larger or smaller than rat position
    if (randomMovement === 1 && redCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){ //&& userCurrentPosition % width > redCurrentPosition % width//
      if (meetuserLeft){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } 
      redCurrentPosition++
      
    } else if (randomMovement === -1 && redCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){ //&& userCurrentPosition % width < redCurrentPosition % width
      if (meetuserRight){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition--
    } else if (randomMovement === -width && redCurrentPosition >= width && !horizontalTop && !verticalTop){ // && userCurrentPosition < redCurrentPosition
      if (meetuserBottom){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition -= width
    } else if (randomMovement === width && redCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){ //&& userCurrentPosition > redCurrentPosition
      if (meetuserTop){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition += width
    } 
  
    addRedRat(redCurrentPosition)  
  }

  // Blue rat random movement
  function blueRandomMovement(){
    
    removeBlueRat(blueCurrentPosition)
  
    const movementOptions = [1, -1, width, -width]
    const randomMovement = movementOptions[Math.floor(Math.random() * movementOptions.length)]
  
    const horizontalRight = cells[blueCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[blueCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[blueCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[blueCurrentPosition - 1].classList.contains('vertical-border')
  
    const horizontalTop = cells[blueCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[blueCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[blueCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[blueCurrentPosition + width].classList.contains('vertical-border')

    const meetuserLeft = cells[blueCurrentPosition + 1].classList.contains('pickle')
    const meetuserRight = cells[blueCurrentPosition - 1].classList.contains('pickle')
    const meetuserBottom = cells[blueCurrentPosition - width].classList.contains('pickle')
    const meetuserTop = cells[blueCurrentPosition + width].classList.contains('pickle')
      
    // Add arguments to check for if userCurrentPosition is larger or smaller than rat position
    if (randomMovement === 1 && blueCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){ // && userCurrentPosition % width > blueCurrentPosition % width
      if (meetuserLeft){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } 
      blueCurrentPosition++
      
    } else if (randomMovement === -1 && blueCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){ // && userCurrentPosition % width < blueCurrentPosition % width
      if (meetuserRight){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition--
    } else if (randomMovement === -width && blueCurrentPosition >= width && !horizontalTop && !verticalTop){ // && userCurrentPosition < blueCurrentPosition
      if (meetuserBottom){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition -= width
    } else if (randomMovement === width && blueCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){ // && userCurrentPosition > blueCurrentPosition
      if (meetuserTop){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition += width
    } 
  
    addBlueRat(blueCurrentPosition)  
  }

  // Yellow rat random movement
  function yellowRandomMovement(){
    
    removeYellowRat(yellowCurrentPosition)
  
    const movementOptions = [1, -1, width, -width]
    const randomMovement = movementOptions[Math.floor(Math.random() * movementOptions.length)]
  
    const horizontalRight = cells[yellowCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[yellowCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[yellowCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[yellowCurrentPosition - 1].classList.contains('vertical-border')
  
    const horizontalTop = cells[yellowCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[yellowCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[yellowCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[yellowCurrentPosition + width].classList.contains('vertical-border')

    const meetuserLeft = cells[yellowCurrentPosition + 1].classList.contains('pickle')
    const meetuserRight = cells[yellowCurrentPosition - 1].classList.contains('pickle')
    const meetuserBottom = cells[yellowCurrentPosition - width].classList.contains('pickle')
    const meetuserTop = cells[yellowCurrentPosition + width].classList.contains('pickle')
      
    // Add arguments to check for if userCurrentPosition is larger or smaller than rat position
    if (randomMovement === 1 && yellowCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){ // && userCurrentPosition % width > yellowCurrentPosition % width
      if (meetuserLeft){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } 
      yellowCurrentPosition++
      
    } else if (randomMovement === -1 && yellowCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){ // && userCurrentPosition % width < yellowCurrentPosition % width
      if (meetuserRight){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition--
    } else if (randomMovement === -width && yellowCurrentPosition >= width && !horizontalTop && !verticalTop){ // && userCurrentPosition < yellowCurrentPosition
      if (meetuserBottom){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition -= width
    } else if (randomMovement === width && yellowCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){ // && userCurrentPosition > yellowCurrentPosition
      if (meetuserTop){
        // userCurrentPosition++ 
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition += width
    } 
  
    addYellowRat(yellowCurrentPosition)  
  }

  // Move red rat on interval
  function moveRedRat (){
    setInterval(() => {
      redRandomMovement()
    }, 250)
  }

  // Move blue rat on interval
  function moveBlueRat (){
    setInterval(() => {
      blueRandomMovement()
    }, 250)
  }

  // Move yellow rat on interval
  function moveYellowRat (){
    setInterval(() => {
      yellowRandomMovement()
    }, 250)
  }

  
  // Start game function
  function startGame(){
  // get rats to start moving
  // check lives
  // When seeds and sauce = 0, game over
  // Display score at the end of the game
  // If lives 0 before seeds and sauce = 0, game over
  
  }

  // turn rats in edible ghosts for a fixed amount of time
  // when eaten, they return to starting position
  







  // Events

  document.addEventListener('keydown', userKeyMovement)
  document.addEventListener('click', startGame)

  createGrid(userStartingPosition)
  createHorizontalPath()
  createVerticalPath()
  addRedRat(redCurrentPosition)
  addBlueRat(blueCurrentPosition)
  addYellowRat(yellowCurrentPosition)
  moveRedRat()
  moveBlueRat()
  moveYellowRat()
  addSauce()
  addSeed()
  
  
  
  
}

window.addEventListener('DOMContentLoaded', init)