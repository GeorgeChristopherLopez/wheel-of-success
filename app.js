let startBtn = document.getElementById("start-btn");
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let startOverlay = document.querySelector(".start");
let loseOverlay = document.querySelector(".lose");
let winOverlay = document.querySelector(".win");

console.log(loseOverlay);
let list = document.querySelector('ul');
list.classList.add('list');


let missed = 0;
let length = 0;
let correct = 0;
let answer = '';




// linkiin park song phrases
const phrases = ["Papercut", "One Step Closer", "With You", "Points of Authority", "Crawling", "Runaway", "By Myself", "In the End", "A Place for My Head", "Forgotten", "Cure for the Itch", "Pushing Me Away"]





const startGame = () => {
    startOverlay.style.display = "none";
    winOverlay.style.display = "none";
    loseOverlay.style.display = "none";
    list.innerHTML = '';
       
    missed = 0;
    length = 0;
    correct = 0;
    answer = '';
    // random number
    let rng = Math.floor(Math.random() * phrases.length);

    // answer
    answer = phrases[rng].toLowerCase();
    //creates array of seperate words
    let words = phrases[rng].split(' ');

    // testing
    console.log(words);
    console.log(list);

    for (word of words) {
        let ul = document.createElement("ul");
        list.append(ul);
        let lastWord = list.lastChild;
        lastWord.classList.add('word');
        lastWord.style.margin = "1.5rem";
        for (el of word) {
            lastWord.innerHTML += `<li class="letter">${el}</li>`;
            length++;
        }
    }
}

// Hides start overlay when start is clicked
startBtn.addEventListener("click", () => {
    startGame();
});



// button click
qwerty.addEventListener('click', event => {
    let clicked = event.target.innerHTML;
    let hit = false;
    let array = document.getElementsByClassName('letter');
    for (el of array) {
        if (el.innerHTML.toLowerCase() == clicked) {
            el.classList.add('show');
            hit = true;
            correct++;
        }
    }

    if (hit === false) {
        missed++;
        let tries = document.getElementsByClassName('tries');
        for (let x = 0; x < missed; x++) {
            console.log(tries[x].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">');
        }
 
    }

    if (missed === 5) {
        loseOverlay.style.display = 'block';
        let restartBtn1 = document.getElementById("restart-btn-loss");
        restartBtn1.addEventListener("click", () => {
            startGame();
        });

      

        console.log(loseOverlay);
    } else if (correct === length) {
        winOverlay.style.display = 'block';
        let restartBtn2 = document.getElementById("restart-btn-win");
        restartBtn2.addEventListener("click", () => {
            startGame();
        });
    }
 
});


