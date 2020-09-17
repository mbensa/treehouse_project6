//declare variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector("a");
const overlay = document.getElementById("overlay");
let missed = 0;

//phrases array
const phrases = ["banana", "pineapple", "passion fruit", "mango", "strawberry"];

//event listener for the "start game" button
btnReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

//function that randombly chooses a phrase from the phrases array
function getRandomPhraseAsArray(arr) {}
