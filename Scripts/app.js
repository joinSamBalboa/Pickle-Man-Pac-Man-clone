function init(){
  // Elements
  const grid = document.querySelector('.grid')
  const start = document.getElementById('start')
  const scoreSpan = document.getElementById('score')
  const livesSpan = document.getElementById('lives')
  const audio = document.getElementById('audio')
  const themeSong = document.getElementById('theme')
  const saveRickButton = document.getElementById('save-rick')
  const overlayMessage = document.getElementById('start-game')
  const message = document.querySelector('p')
  const pressStart = document.getElementById('begin')
  const music = document.getElementById('music')
  const musicOn = document.getElementById('musicOn')

  // Variables
  const width = 13
  const cellCount = width * width
  const cells = []

  const seedScore = 10
  let seedsHeld = 0
  const sauceScore = 20
  const ratPreyScore = 50

  let redInterval
  let redPreyInterval
  let redPreyTimeout

  let blueInterval
  let bluePreyInterval
  let bluePreyTimeout

  let yellowInterval
  let yellowPreyInterval
  let yellowPreyTimeout

  const userClassName = 'pickle'
  const userStartingPosition = 78
  let userCurrentPosition = userStartingPosition

  const redClassName = 'red'
  const redStartingPosition = 83
  let redCurrentPosition = redStartingPosition

  const redPreyClassName = 'red-prey'
  const redPreyStartingPosition = redCurrentPosition
  let redPreyCurrentPosition = redPreyStartingPosition

  const blueClassName = 'blue'
  const blueStartingPosition = 84
  let blueCurrentPosition = blueStartingPosition

  const bluePreyClassName = 'blue-prey'
  const bluePreyStartingPosition = blueCurrentPosition
  let bluePreyCurrentPosition = bluePreyStartingPosition

  const yellowClassName = 'yellow'
  const yellowStartingPosition = 85
  let yellowCurrentPosition = yellowStartingPosition

  const yellowPreyClassName = 'yellow-prey'
  const yellowPreyStartingPosition = yellowCurrentPosition
  let yellowPreyCurrentPosition = yellowPreyStartingPosition

  const seedClassName = 'seed'
  const sauceClassName = 'sauce'

  

  // Executions
  // Create Grid
  function createGrid(startPosition){
    for (let i = 0; i < cellCount; i++){ 
      const cell = document.createElement('div') 
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
      } else if (i >= 87 && i <= 90){
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
      } else if (i >= 145 && i <= 153){
        cells[i].classList.add(seedClassName) 
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
    checkSeeds()
    changeHighScore()
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

    const meetRedPreyRight = cells[userCurrentPosition + 1].classList.contains('red-prey')
    const meetRedPreyLeft = cells[userCurrentPosition - 1].classList.contains('red-prey')
    const meetRedPreyTop = cells[userCurrentPosition - width].classList.contains('red-prey')
    const meetRedPreyBottom = cells[userCurrentPosition + width].classList.contains('red-prey')

    const meetBlueRight = cells[userCurrentPosition + 1].classList.contains('blue')
    const meetBlueLeft = cells[userCurrentPosition - 1].classList.contains('blue')
    const meetBlueTop = cells[userCurrentPosition - width].classList.contains('blue')
    const meetBlueBottom = cells[userCurrentPosition + width].classList.contains('blue')

    const meetBluePreyRight = cells[userCurrentPosition + 1].classList.contains('blue-prey')
    const meetBluePreyLeft = cells[userCurrentPosition - 1].classList.contains('blue-prey')
    const meetBluePreyTop = cells[userCurrentPosition - width].classList.contains('blue-prey')
    const meetBluePreyBottom = cells[userCurrentPosition + width].classList.contains('blue-prey')

    const meetYellowRight = cells[userCurrentPosition + 1].classList.contains('yellow')
    const meetYellowLeft = cells[userCurrentPosition - 1].classList.contains('yellow')
    const meetYellowTop = cells[userCurrentPosition - width].classList.contains('yellow')
    const meetYellowBottom = cells[userCurrentPosition + width].classList.contains('yellow')

    const meetYellowPreyRight = cells[userCurrentPosition + 1].classList.contains('yellow-prey')
    const meetYellowPreyLeft = cells[userCurrentPosition - 1].classList.contains('yellow-prey')
    const meetYellowPreyTop = cells[userCurrentPosition - width].classList.contains('yellow-prey')
    const meetYellowPreyBottom = cells[userCurrentPosition + width].classList.contains('yellow-prey')

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
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition--
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedRight){
        cells[userCurrentPosition + 1].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
        seedsHeld += 1
      } else if (meetSauceRight){
        cells[userCurrentPosition + 1].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
        killRedMode()
        killBlueMode()
        killYellowMode()
      } else if (meetRedPreyRight){
        audio.src = "Sounds/I DON'T THINK SO - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        clearInterval(redPreyInterval)
        clearTimeout(redPreyTimeout)
        removeRedPrey(redPreyCurrentPosition)
        redCurrentPosition = redStartingPosition
        addRedRat(redCurrentPosition)
        moveRedRat()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } else if (meetBlueRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition--
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetBluePreyRight){
        audio.src = "Sounds/BOOM - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        clearInterval(bluePreyInterval)
        clearTimeout(bluePreyTimeout)
        removeBluePrey(bluePreyCurrentPosition)
        blueCurrentPosition = blueStartingPosition
        addBlueRat(blueCurrentPosition)
        moveBlueRat()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } else if (meetYellowRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition--
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetYellowPreyRight){
        audio.src = "Sounds/SEE YOU SOON - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        clearInterval(yellowPreyInterval)
        clearTimeout(yellowPreyTimeout)
        removeYellowPrey(yellowPreyCurrentPosition)
        yellowCurrentPosition = yellowStartingPosition
        addYellowRat(yellowCurrentPosition)
        moveYellowRat()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      userCurrentPosition++
      
      
    } else if (key === left && userCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){
      if (meetRedLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedLeft){
        cells[userCurrentPosition - 1].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
        seedsHeld += 1
      } else if (meetSauceLeft){
        cells[userCurrentPosition - 1].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
        killRedMode()
        killBlueMode()
        killYellowMode()
      } else if (meetRedPreyLeft){
        clearInterval(redPreyInterval)
        clearTimeout(redPreyTimeout)
        removeRedPrey(redPreyCurrentPosition)
        redCurrentPosition = redStartingPosition
        addRedRat(redCurrentPosition)
        moveRedRat()
        audio.src = "Sounds/I DON'T THINK SO - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } else if (meetBlueLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetBluePreyLeft){
        clearInterval(bluePreyInterval)
        clearTimeout(bluePreyTimeout)
        removeBluePrey(bluePreyCurrentPosition)
        blueCurrentPosition = blueStartingPosition
        addBlueRat(blueCurrentPosition)
        moveBlueRat()
        audio.src = "Sounds/BOOM - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
      } else if (meetYellowLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetYellowPreyLeft){
        clearInterval(yellowPreyInterval)
        clearTimeout(yellowPreyTimeout)
        removeYellowPrey(yellowPreyCurrentPosition)
        yellowCurrentPosition = yellowStartingPosition
        addYellowRat(yellowCurrentPosition)
        moveYellowRat()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
        audio.src = "Sounds/SEE YOU SOON - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
      }
      userCurrentPosition--
    } else if (key === up && userCurrentPosition >= width && !horizontalTop && !verticalTop){
      if (meetRedTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedTop){
        cells[userCurrentPosition - width].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
        seedsHeld += 1
      } else if (meetSauceTop){
        cells[userCurrentPosition - width].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
        killRedMode()
        killBlueMode()
        killYellowMode()
      } else if (meetRedPreyTop){
        clearInterval(redPreyInterval)
        clearTimeout(redPreyTimeout)
        removeRedPrey(redPreyCurrentPosition)
        redCurrentPosition = redStartingPosition
        addRedRat(redCurrentPosition)
        moveRedRat()
        audio.src = "Sounds/I DON'T THINK SO - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } else if (meetBlueTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetBluePreyTop){
        clearInterval(bluePreyInterval)
        clearTimeout(bluePreyTimeout)
        removeBluePrey(bluePreyCurrentPosition)
        blueCurrentPosition = blueStartingPosition
        addBlueRat(blueCurrentPosition)
        moveBlueRat()
        audio.src = "Sounds/BOOM - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
      } else if (meetYellowTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetYellowPreyTop){
        clearInterval(yellowPreyInterval)
        clearTimeout(yellowPreyTimeout)
        removeYellowPrey(yellowPreyCurrentPosition)
        yellowCurrentPosition = yellowStartingPosition
        addYellowRat(yellowCurrentPosition)
        moveYellowRat()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
        audio.src = "Sounds/SEE YOU SOON - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
      }
      userCurrentPosition -= width
    } else if (key === down && userCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){
      if (meetRedBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition -= width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetSeedBottom){
        cells[userCurrentPosition + width].classList.remove(seedClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + seedScore
        seedsHeld += 1
      } else if (meetSauceBottom){
        cells[userCurrentPosition + width].classList.remove(sauceClassName)
        scoreSpan.innerText = Number(scoreSpan.innerText) + sauceScore
        killRedMode()
        killBlueMode()
        killYellowMode()
      } else if (meetRedPreyBottom){
        clearInterval(redPreyInterval)
        clearTimeout(redPreyTimeout)
        removeRedPrey(redPreyCurrentPosition)
        redCurrentPosition = redStartingPosition
        addRedRat(redCurrentPosition)
        moveRedRat()
        audio.src = "Sounds/I DON'T THINK SO - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } else if (meetBlueBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition -= width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetBluePreyBottom){
        clearInterval(bluePreyInterval)
        clearTimeout(bluePreyTimeout)
        removeBluePrey(bluePreyCurrentPosition)
        blueCurrentPosition = blueStartingPosition
        addBlueRat(blueCurrentPosition)
        moveBlueRat()
        audio.src = "Sounds/BOOM - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
      } else if (meetYellowBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition -= width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetYellowPreyBottom){
        clearInterval(yellowPreyInterval)
        clearTimeout(yellowPreyTimeout)
        removeYellowPrey(yellowPreyCurrentPosition)
        yellowCurrentPosition = yellowStartingPosition
        addYellowRat(yellowCurrentPosition)
        moveYellowRat()
        audio.src = "Sounds/SEE YOU SOON - AUDIO FROM JAYUZUMI.COM.mp3"
        audio.play()
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
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

  // Add Red prey
  function addRedPrey(cellPosition){
    cells[cellPosition].classList.add(redPreyClassName)
  }
  // Remove Red Rat
  function removeRedPrey(cellPosition){
    cells[cellPosition].classList.remove(redPreyClassName)
  }

  // Add blue rat
  function addBlueRat(cellPosition){
    cells[cellPosition].classList.add(blueClassName)
  }
  // Remove blue rat
  function removeBlueRat(cellPosition){
    cells[cellPosition].classList.remove(blueClassName)
  }

  // Add blue prey
  function addBluePrey(cellPosition){
    cells[cellPosition].classList.add(bluePreyClassName)
  }
  // Remove blue Rat
  function removeBluePrey(cellPosition){
    cells[cellPosition].classList.remove(bluePreyClassName)
  }

  // Add yellow rat
  function addYellowRat(cellPosition){
    cells[cellPosition].classList.add(yellowClassName)
  }
  // remove yellow rat
  function removeYellowRat(cellPosition){
    cells[cellPosition].classList.remove(yellowClassName)
  }

  // Add yellow prey
  function addYellowPrey(cellPosition){
    cells[cellPosition].classList.add(yellowPreyClassName)
  }
  // Remove yellow Rat
  function removeYellowPrey(cellPosition){
    cells[cellPosition].classList.remove(yellowPreyClassName)
  }

  // Red rat random Movement
  
  function redRandomMovement(){
    checkLives()
    removeRedRat(redCurrentPosition)
  
    let movementOptions = []
    
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
    if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft && !horizontalTop && !verticalTop && !horizontalBottom && !verticalBottom){
      if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      movementOptions = [width, -width, 1, -1]
      redCurrentPosition += movementOptions[Math.floor(Math.random() * movementOptions.length)]
    } else if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft && !horizontalTop && !verticalTop){
      if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      movementOptions = [1, -1, -width]
      redCurrentPosition += movementOptions[Math.floor(Math.random() * movementOptions.length)]
    
    } else if (!horizontalBottom && !horizontalLeft && !verticalBottom && !verticalLeft && !horizontalTop && !verticalTop){
      if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      movementOptions = [width, -1, -width]
      redCurrentPosition += movementOptions[Math.floor(Math.random() * movementOptions.length)]
      
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom && !horizontalTop && !verticalTop){
      if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      movementOptions = [width, 1, -width]
      redCurrentPosition += movementOptions[Math.floor(Math.random() * movementOptions.length)]
      
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom && !horizontalLeft && !verticalLeft){
      if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      } else if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      movementOptions = [width, -1, 1]
      redCurrentPosition += movementOptions[Math.floor(Math.random() * movementOptions.length)]
      
    } else if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft){
      if (userCurrentPosition % width <= redCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition--
      } else if (userCurrentPosition % width >= redCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition++
      }
    } else if (!horizontalTop && !horizontalBottom && !verticalTop && !verticalBottom){
      if (userCurrentPosition >= redCurrentPosition){
        if (meetuserTop){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition += width
      } else if (userCurrentPosition <= redCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition -= width
      }
    } else if (!horizontalRight && !horizontalTop && !verticalRight && !verticalTop){
      if (userCurrentPosition <= redCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition -= width
      } else if (userCurrentPosition % width >= redCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition++
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom){
      if (userCurrentPosition % width >= redCurrentPosition % width){
        if (meetuserLeft){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition++
      } else if (userCurrentPosition >= redCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition += width
      }
    } else if (!horizontalTop && !horizontalLeft && !verticalTop && !verticalLeft){
      if (userCurrentPosition <= redCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition -= width
      } else if (userCurrentPosition % width <= redCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition--
      }
    } else if (!horizontalBottom && !horizontalLeft && !verticalBottom && !verticalLeft){
      if (userCurrentPosition % width <= redCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition--
      } else if (userCurrentPosition >= redCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        redCurrentPosition += width
      }
    } else if (!horizontalRight && !verticalRight){
      if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition++
    } else if (!horizontalTop && !verticalTop){
      if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition -= width
    } else if (!horizontalBottom && !verticalBottom){
      if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition += width
    } else if (!horizontalLeft && !verticalLeft) {
      if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      redCurrentPosition--
    }

  
    
    addRedRat(redCurrentPosition)  
  }

  // Blue rat random movement
  function blueRandomMovement(){
    checkLives()
    removeBlueRat(blueCurrentPosition)
  
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
    if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft && !horizontalTop && !verticalTop && !horizontalBottom && !verticalBottom){
      if (userCurrentPosition <= blueCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      } else if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      } else if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      }  else if (userCurrentPosition % width >= blueCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition++
      } 
    } else if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft && !horizontalTop && !verticalTop){
      if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      } else if (userCurrentPosition % width >= blueCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition++
      } else if (userCurrentPosition <= blueCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      }
    } else if (!horizontalBottom && !horizontalLeft && !verticalBottom && !verticalLeft && !horizontalTop && !verticalTop){
      if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      } else if (userCurrentPosition <= blueCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      } else if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom && !horizontalTop && !verticalTop){
      if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      } else if (userCurrentPosition <= blueCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      } else if (userCurrentPosition % width >= blueCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition++
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom && !horizontalLeft && !verticalLeft){
      if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      } else if (userCurrentPosition % width >= blueCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition++
      } else if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      }
    } else if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft){
      if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      } else if (userCurrentPosition % width >= blueCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition++
      }
    } else if (!horizontalTop && !horizontalBottom && !verticalTop && !verticalBottom){
      if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      } else if (userCurrentPosition <= blueCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      }
    } else if (!horizontalRight && !horizontalTop && !verticalRight && !verticalTop){
      if (userCurrentPosition <= blueCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      } else if (userCurrentPosition % width >= blueCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition++
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom){
      if (userCurrentPosition % width >= blueCurrentPosition % width){
        blueCurrentPosition++
      } else if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      }
    } else if (!horizontalTop && !horizontalLeft && !verticalTop && !verticalLeft){
      if (userCurrentPosition <= blueCurrentPosition - 5){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition -= width
      } else if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      }
    } else if (!horizontalBottom && !horizontalLeft && !verticalBottom && !verticalLeft){
      if (userCurrentPosition % width <= blueCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition--
      } else if (userCurrentPosition >= blueCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        blueCurrentPosition += width
      }
    } else if (!horizontalRight && !verticalRight){
      if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition++
    } else if (!horizontalTop && !verticalTop){
      if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition -= width
    } else if (!horizontalBottom && !verticalBottom){
      if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition += width
    } else if (!horizontalLeft && !verticalLeft) {
      if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      blueCurrentPosition--
    }

  
    
    addBlueRat(blueCurrentPosition)  
  }

  // Yellow rat random movement
  function yellowRandomMovement(){
    checkLives()
    removeYellowRat(yellowCurrentPosition)
  
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
    if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft && !horizontalTop && !verticalTop && !horizontalBottom && !verticalBottom){
      if (userCurrentPosition <= yellowCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      } else if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      } else if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      }  else if (userCurrentPosition % width >= yellowCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition++
      } 
    } else if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft && !horizontalTop && !verticalTop){
      if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      } else if (userCurrentPosition % width >= yellowCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition++
      } else if (userCurrentPosition <= yellowCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      }
    } else if (!horizontalBottom && !horizontalLeft && !verticalBottom && !verticalLeft && !horizontalTop && !verticalTop){
      if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      } else if (userCurrentPosition <= yellowCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      } else if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom && !horizontalTop && !verticalTop){
      if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      } else if (userCurrentPosition <= yellowCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      } else if (userCurrentPosition % width >= yellowCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition++
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom && !horizontalLeft && !verticalLeft){
      if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      } else if (userCurrentPosition % width >= yellowCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition++
      } else if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      }
    } else if (!horizontalRight && !horizontalLeft && !verticalRight && !verticalLeft){
      if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      } else if (userCurrentPosition % width >= yellowCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition++
      }
    } else if (!horizontalTop && !horizontalBottom && !verticalTop && !verticalBottom){
      if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      } else if (userCurrentPosition <= yellowCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      }
    } else if (!horizontalRight && !horizontalTop && !verticalRight && !verticalTop){
      if (userCurrentPosition <= yellowCurrentPosition){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      } else if (userCurrentPosition % width >= yellowCurrentPosition % width){
        if (meetuserLeft){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition++
      }
    } else if (!horizontalRight && !horizontalBottom && !verticalRight && !verticalBottom){
      if (userCurrentPosition % width >= yellowCurrentPosition % width){
        yellowCurrentPosition++
      } else if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      }
    } else if (!horizontalTop && !horizontalLeft && !verticalTop && !verticalLeft){
      if (userCurrentPosition <= yellowCurrentPosition - 5){
        if (meetuserBottom){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition -= width
      } else if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      }
    } else if (!horizontalBottom && !horizontalLeft && !verticalBottom && !verticalLeft){
      if (userCurrentPosition % width <= yellowCurrentPosition % width){
        if (meetuserRight){
          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition++
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition--
      } else if (userCurrentPosition >= yellowCurrentPosition){
        if (meetuserTop){

          removePickle(userCurrentPosition)
          userCurrentPosition = userStartingPosition
          addPickle(userStartingPosition)
          userCurrentPosition += width
          livesSpan.innerText = Number(livesSpan.innerText) - 1
        }
        yellowCurrentPosition += width
      }
    } else if (!horizontalRight && !verticalRight){
      if (meetuserLeft){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition++
    } else if (!horizontalTop && !verticalTop){
      if (meetuserBottom){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition -= width
    } else if (!horizontalBottom && !verticalBottom){
      if (meetuserTop){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition += width
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition += width
    } else if (!horizontalLeft && !verticalLeft) {
      if (meetuserRight){
        removePickle(userCurrentPosition)
        userCurrentPosition = userStartingPosition
        addPickle(userStartingPosition)
        userCurrentPosition++
        livesSpan.innerText = Number(livesSpan.innerText) - 1
      }
      yellowCurrentPosition--
    }

  
    
    addYellowRat(yellowCurrentPosition)  
  }

  // red prey movement
  function redPreyMovement(){
    checkLives()
    removeRedPrey(redPreyCurrentPosition)
  
    const movementOptions = [1, -1, width, -width]
    const randomMovement = movementOptions[Math.floor(Math.random() * movementOptions.length)]
  
    const horizontalRight = cells[redPreyCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[redPreyCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[redPreyCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[redPreyCurrentPosition - 1].classList.contains('vertical-border')
  
    const horizontalTop = cells[redPreyCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[redPreyCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[redPreyCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[redPreyCurrentPosition + width].classList.contains('vertical-border')

    const meetuserLeft = cells[redPreyCurrentPosition + 1].classList.contains('pickle')
    const meetuserRight = cells[redPreyCurrentPosition - 1].classList.contains('pickle')
    const meetuserBottom = cells[redPreyCurrentPosition - width].classList.contains('pickle')
    const meetuserTop = cells[redPreyCurrentPosition + width].classList.contains('pickle')
      

    if (randomMovement === 1 && redPreyCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){ //&& userCurrentPosition % width > redPreyCurrentPosition % width//
      if (meetuserLeft){
        removeRedPrey(redPreyCurrentPosition)
        addRedRat(redStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } 
      redPreyCurrentPosition += randomMovement
      
    } else if (randomMovement === -1 && redPreyCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){ //&& userCurrentPosition % width < redPreyCurrentPosition % width
      if (meetuserRight){
        removeRedPrey(redPreyCurrentPosition)
        addRedRat(redStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      redPreyCurrentPosition += randomMovement
    } else if (randomMovement === -width && redPreyCurrentPosition >= width && !horizontalTop && !verticalTop){ // && userCurrentPosition < redPreyCurrentPosition
      if (meetuserBottom){
        removeRedPrey(redPreyCurrentPosition)
        addRedRat(redStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      redPreyCurrentPosition += randomMovement
    } else if (randomMovement === width && redPreyCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){ //&& userCurrentPosition > redPreyCurrentPosition
      if (meetuserTop){
        removeRedPrey(redPreyCurrentPosition)
        addRedRat(redStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      redPreyCurrentPosition += randomMovement
    }
    addRedPrey(redPreyCurrentPosition)  
  }

  // blue prey movement
  function bluePreyMovement(){
    checkLives()
    removeBluePrey(bluePreyCurrentPosition)
  
    const movementOptions = [1, -1, width, -width]
    const randomMovement = movementOptions[Math.floor(Math.random() * movementOptions.length)]
  
    const horizontalRight = cells[bluePreyCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[bluePreyCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[bluePreyCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[bluePreyCurrentPosition - 1].classList.contains('vertical-border')
  
    const horizontalTop = cells[bluePreyCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[bluePreyCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[bluePreyCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[bluePreyCurrentPosition + width].classList.contains('vertical-border')

    const meetuserLeft = cells[bluePreyCurrentPosition + 1].classList.contains('pickle')
    const meetuserRight = cells[bluePreyCurrentPosition - 1].classList.contains('pickle')
    const meetuserBottom = cells[bluePreyCurrentPosition - width].classList.contains('pickle')
    const meetuserTop = cells[bluePreyCurrentPosition + width].classList.contains('pickle')
      
    // Add arguments to check for if userCurrentPosition is larger or smaller than rat position
    if (randomMovement === 1 && bluePreyCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){ //&& userCurrentPosition % width > bluePreyCurrentPosition % width//
      if (meetuserLeft){
        removeBluePrey(bluePreyCurrentPosition)
        addBlueRat(blueStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } 
      bluePreyCurrentPosition++
      
    } else if (randomMovement === -1 && bluePreyCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){ //&& userCurrentPosition % width < bluePreyCurrentPosition % width
      if (meetuserRight){
        removeBluePrey(bluePreyCurrentPosition)
        addBlueRat(blueStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      bluePreyCurrentPosition--
    } else if (randomMovement === -width && bluePreyCurrentPosition >= width && !horizontalTop && !verticalTop){ // && userCurrentPosition < bluePreyCurrentPosition
      if (meetuserBottom){
        removeBluePrey(bluePreyCurrentPosition)
        addBlueRat(blueStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      bluePreyCurrentPosition -= width
    } else if (randomMovement === width && bluePreyCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){ //&& userCurrentPosition > bluePreyCurrentPosition
      if (meetuserTop){
        removeBluePrey(bluePreyCurrentPosition)
        addBlueRat(blueStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      bluePreyCurrentPosition += width
    } 
  
    addBluePrey(bluePreyCurrentPosition)  
  }

  // yellow prey movement
  function yellowPreyMovement(){
    checkLives()
    removeYellowPrey(yellowPreyCurrentPosition)
  
    const movementOptions = [1, -1, width, -width]
    const randomMovement = movementOptions[Math.floor(Math.random() * movementOptions.length)]
  
    const horizontalRight = cells[yellowPreyCurrentPosition + 1].classList.contains('horizontal-border')
    const horizontalLeft = cells[yellowPreyCurrentPosition - 1].classList.contains('horizontal-border')
    const verticalRight = cells[yellowPreyCurrentPosition + 1].classList.contains('vertical-border')
    const verticalLeft = cells[yellowPreyCurrentPosition - 1].classList.contains('vertical-border')
  
    const horizontalTop = cells[yellowPreyCurrentPosition - width].classList.contains('horizontal-border')
    const horizontalBottom = cells[yellowPreyCurrentPosition + width].classList.contains('horizontal-border')
    const verticalTop = cells[yellowPreyCurrentPosition - width].classList.contains('vertical-border')
    const verticalBottom = cells[yellowPreyCurrentPosition + width].classList.contains('vertical-border')

    const meetuserLeft = cells[yellowPreyCurrentPosition + 1].classList.contains('pickle')
    const meetuserRight = cells[yellowPreyCurrentPosition - 1].classList.contains('pickle')
    const meetuserBottom = cells[yellowPreyCurrentPosition - width].classList.contains('pickle')
    const meetuserTop = cells[yellowPreyCurrentPosition + width].classList.contains('pickle')
      
    // Add arguments to check for if userCurrentPosition is larger or smaller than rat position
    if (randomMovement === 1 && yellowPreyCurrentPosition % width !== width - 1 && !horizontalRight && !verticalRight){ //&& userCurrentPosition % width > yellowPreyCurrentPosition % width//
      if (meetuserLeft){
        removeYellowPrey(yellowPreyCurrentPosition)
        addYellowRat(yellowStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      } 
      yellowPreyCurrentPosition++
      
    } else if (randomMovement === -1 && yellowPreyCurrentPosition % width !== 0 && !horizontalLeft && !verticalLeft){ //&& userCurrentPosition % width < yellowPreyCurrentPosition % width
      if (meetuserRight){
        removeYellowPrey(yellowPreyCurrentPosition)
        addYellowRat(yellowStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      yellowPreyCurrentPosition--
    } else if (randomMovement === -width && yellowPreyCurrentPosition >= width && !horizontalTop && !verticalTop){ // && userCurrentPosition < yellowPreyCurrentPosition
      if (meetuserBottom){
        removeYellowPrey(yellowPreyCurrentPosition)
        addYellowRat(yellowStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      yellowPreyCurrentPosition -= width
    } else if (randomMovement === width && yellowPreyCurrentPosition + width <= cellCount - 1 && !horizontalBottom && !verticalBottom){ //&& userCurrentPosition > yellowPreyCurrentPosition
      if (meetuserTop){
        removeYellowPrey(yellowPreyCurrentPosition)
        addYellowRat(yellowStartingPosition)
        scoreSpan.innerText = Number(scoreSpan.innerText) + ratPreyScore
      }
      yellowPreyCurrentPosition += width
    } 
  
    addYellowPrey(yellowPreyCurrentPosition)  
  }


  // Move red rat on interval
  function moveRedRat (){
    redInterval = setInterval(() => {
      redRandomMovement()
    }, 1000)
  }

  // Move blue rat on interval
  function moveBlueRat (){
    blueInterval = setInterval(() => {
      blueRandomMovement()
    }, 1000)
  }

  // Move yellow rat on interval
  function moveYellowRat (){
    yellowInterval = setInterval(() => {
      yellowRandomMovement()
    }, 3000)
  }

  function moveRedPrey (){
    redPreyInterval = setInterval(() => {
      redPreyMovement()
    }, 1000)

    redPreyTimeout = setTimeout(()=> {
      clearInterval(redPreyInterval)
      removeRedPrey(redPreyCurrentPosition)
      addRedRat(redPreyCurrentPosition)
      redCurrentPosition = redPreyCurrentPosition
      moveRedRat()
    }, 2000)
  }

  function moveBluePrey (){
    bluePreyInterval = setInterval(() => {
      bluePreyMovement()
    }, 1000)

    bluePreyTimeout = setTimeout(()=> {
      clearInterval(bluePreyInterval)
      removeBluePrey(bluePreyCurrentPosition)
      addBlueRat(bluePreyCurrentPosition)
      blueCurrentPosition = bluePreyCurrentPosition
      moveBlueRat()
    }, 2000)
  }

  function moveYellowPrey (){
    yellowPreyInterval = setInterval(() => {
      yellowPreyMovement()
    }, 1000)

    yellowPreyTimeout = setTimeout(()=> {
      clearInterval(yellowPreyInterval)
      removeYellowPrey(yellowPreyCurrentPosition)
      addYellowRat(yellowPreyCurrentPosition)
      yellowCurrentPosition = yellowPreyCurrentPosition
      moveYellowRat()
    }, 2000)
  }
  
  // Allow rats to become killed function
  function killRedMode(){
    clearInterval(redInterval)  
    removeRedRat(redCurrentPosition)
    addRedPrey(redCurrentPosition)
    redPreyCurrentPosition = redCurrentPosition
    moveRedPrey()
    audio.src = 'Sounds/YES - AUDIO FROM JAYUZUMI.COM.mp3'
    audio.play()
  }

  function killBlueMode(){
    clearInterval(blueInterval)  
    removeBlueRat(blueCurrentPosition)
    addBluePrey(blueCurrentPosition)
    bluePreyCurrentPosition = blueCurrentPosition
    moveBluePrey()
    audio.src = 'Sounds/YES - AUDIO FROM JAYUZUMI.COM.mp3'
    audio.play()
  }

  function killYellowMode(){
    clearInterval(yellowInterval)  
    removeYellowRat(yellowCurrentPosition)
    addYellowPrey(yellowCurrentPosition)
    yellowPreyCurrentPosition = yellowCurrentPosition
    moveYellowPrey()
    audio.src = 'Sounds/YES - AUDIO FROM JAYUZUMI.COM.mp3'
    audio.play()
  }


  
  // Start game function
  function startGame(){
    audio.src = "Sounds/I'M A PICKLE - AUDIO FROM JAYUZUMI.COM.mp3"
    audio.play()
    moveRedRat()
    moveBlueRat()
    moveYellowRat() 
    pressStart.innerHTML = ''
  }

  // check lives and if user loses
  function checkLives(){
    if (livesSpan.innerHTML === '0'){
      audio.src = "Sounds/MAN I MISS HAVING HANDS - AUDIO FROM JAYUZUMI.COM.mp3"
      audio.play()
      clearInterval(redInterval)
      clearInterval(blueInterval)
      clearInterval(yellowInterval)
      loseEndMessage()
    }
  } 
  
  // Check seeds and if user wins
  function checkSeeds(){
    if (seedsHeld >= 67){
      audio.src = "Sounds/PICKLE RICK - AUDIO FROM JAYUZUMI.COM.mp3"
      audio.play()
      clearInterval(redInterval)
      clearInterval(blueInterval)
      clearInterval(yellowInterval)
      winEndMessage()
      
    }
  }

  function closeStartMessage(){
    overlayMessage.classList.remove('start-game')
    message.innerHTML = ''
    saveRickButton.remove()
    themeSong.src = "Sounds/Human Music.mp3"
    themeSong.play()
    themeSong.loop = true
  }
  
  function winEndMessage(){
    overlayMessage.classList.add('win-game')
    message.innerHTML = `Wow you got ${scoreSpan.innerText} points for saving my life, what a waste of time`
    setTimeout(() => {
      document.location.reload()
    }, 5000)
    themeSong.stop()
    themeSong.loop = false
  }

  function loseEndMessage(){
    overlayMessage.classList.add('lose-game')
    setTimeout(() => {
      document.location.reload()
    }, 5000)
  }
  
  function pauseMusic(){
    themeSong.pause()
  }

  function playMusic(){
    themeSong.play()
  }

  createGrid(userStartingPosition)
  createHorizontalPath()
  createVerticalPath()
  addRedRat(redCurrentPosition)
  addBlueRat(blueCurrentPosition)
  addYellowRat(yellowCurrentPosition)
  
  addSauce()
  addSeed()
  



  // Events
  saveRickButton.addEventListener('click', closeStartMessage)
  start.addEventListener('click', startGame)
  document.addEventListener('keydown', userKeyMovement)
  music.addEventListener('click', pauseMusic)
  musicOn.addEventListener('click', playMusic)
  

  
  
  
  
  
}

window.addEventListener('DOMContentLoaded', init)