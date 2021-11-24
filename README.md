<h1 align="center">Welcome to Pickle Man 🥒👨</h1>

## Overview
This was my first project on the Software Engineering Immersive course at General Assembly. It was a solo project.

## Timeframe
<p>1 Week</p>

## Goal
<p> To render a game in-browser that's built on a grid. I had to design logic for winning & visually display which player won, and to also use JavaScript for DOM manipulation</p>


## ❓ What is Pickle Man?

<p>This is a Rick and Morty inspired Pac-Man clone using purely HTML, CSS, and Vanilla Javascript. The user is able to control the main character, Pickle Man, who is tasked with collecting all of the mega seeds to escape the sewers he finds himself in, whilst avoiding the ghost-rats. The user is also able to use Szechuan sauces, placed in each corner of the game, to enable the ghost-rats to be eliminated and get additional points.</p>


## ✨ [Demo](https://joinsambalboa.github.io/Pickle-Man-Pac-Man-clone/)

<div align="center">
<img alt="opening screen" src="./Images/Kapture 2021-11-03 at 10.25.45.gif" />
</div>


## 💾 Technologies Used

<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript ES6</li>
<li>Git</li>
<li>GitHub</li>


## 🚀 Approach

I started by white boarding my plans for the game, what parts would require what and how I would implement specific features; Including pseudocode for the elements required. I decided on focusing on creating the grid first, how many grids it would contain and where I would want the users and computer to start on the grid.

<h4>Flex Grid</h4>
<li>Created a 13 x 13 grid using flexbox.</li>
<li>Used logical statements to add barriers, including horizontal and vertical which gave the grids specific classes.</li>

```
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
```


<h4>Seeds and Sauce</h4>
<li>Used local statements to add seeds and sauces to the specific grid boxes</li>
<li>When interacted with, the seed/sauce will no longer be available</li>
<li>These items gave the user points</li>
<li>When the seeds are all collected, the game ends</li>
<li>When sauce is eaten, the ghost-rats are vulnerable and the user can eliminate them for extra points and to send them back to where they started</li>

```
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
```

| Item | Points | Effect |
|--|--|--|
| <img src="./Images/Speed_Mega_Seed.png" width="100" /> | 20 | Once all collected, game is over |
| <img src="https://img1.picmix.com/output/stamp/normal/5/6/7/8/1898765_af7fc.png" width="100" /> | 50 | Allows ghost-rats to be eliminated and returns them to their starting position |

<h4>User</h4>
<li>Using the arrow keys, user is able to control the player to move around the sewer to collect megaseeds and sauces</li>
<li>The user is able to interact with everything in the sewers: Megaseeds - gives 20 points, and once all collected the game ends. Szechaun Sauce - gives 50 points, makes the ghost-rats vulnerable. Ghosts-rats - Takes one life away, and returns the user to starting position. Scared Ghost-Rats - eliminate them and send them back to their beginning position.


<h4>Ghost Rats</h4>
<li>Ghost-rats were all created with the same logic to move randomly around the sewer</li>
<li>They were also given additional logic to move towards the user dependant on the users position in the sewers</li>
<li>They are able to take a life away from the user and return him to his starting position of the game</li>

| Ghost-rat | Scared Ghost-rat |
|--|--|
| <img src="./Images/ezgif.com-gif-maker.gif" width="100" /> | <img src="./Images/redprey.gif" width="100" /> |
| <img src="./Images/blue.gif" width="100" /> | <img src="./Images/blueprey.gif" width="100" /> |
| <img src="./Images/yellow.gif" width="100" /> | <img src="./Images/yellowprey.gif" width="100" /> |

```
// Rats become edible for 2 seconds 
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
```

## Challenges

<li>Refactoring the code to make it more readable, and DRY. Due to timing at the end, I wasn't able to do this and bugs were more likely to appear</li>
<li>The ghost rat movement to be truly random and also move towards the user basen on his position</li>

## Wins

<li>Getting the ghost-rats to change for the set interval and change back in the right place</li>
<li>I learnt alot from this project and will definitely provide learnings for future projects</li>
<li>Creating a game from scratch using skills learnt in the last 3 weeks</li>

## Key Learnings
<li>Working on each section at a time and not necessarily having to think about the whole project helped me get through building the game.</li>
<li>Reusable code would have saved me so much time but something I’ve definitely learnt for future projects</li>

## Bugs
One major bug that affects the ghost-rats when they're edible and if you eat too many szechuan sauces before they timeout. 

## Author

👤 **Jason Abimbola**

* Github: [@JoinSamBalboa](https://github.com/JoinSamBalboa)
* LinkedIn: [@JoinSamBalboa](https://linkedin.com/in/joinsambalboa)
* Portfolio: [@JoinSamBalboa](https://joinsambalboa.com)

