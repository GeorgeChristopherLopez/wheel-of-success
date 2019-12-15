let startBtn = document.getElementById("start-btn");
let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let startOverlay = document.querySelector(".start");
let list = document.querySelector('ul');
list.classList.add('list');
let missed = 0;
let answer = '';
// linkiin park song phrases
const phrases = ["Papercut", "One Step Closer", "With You", "Points of Authority", "Crawling", "Runaway", "By Myself", "In the End", "A Place for My Head", "Forgotten", "Cure for the Itch", "Pushing Me Away"]


// Hides start overlay when start is clicked
startBtn.addEventListener("click",  ()=> {
    startOverlay.style.display = "none";

    // random number
    let rng = Math.floor(Math.random() * phrases.length);

    // answer
    answer = phrases[rng].toLowerCase();
    // words
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
            
        }
    }
});

// button click
qwerty.addEventListener('click', event => {
    let clicked = event.target.innerHTML;
    console.log(answer);
    console.log(answer.includes(clicked));
});
