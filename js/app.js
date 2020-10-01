//variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector("a");
const overlay = document.getElementById("overlay");
const ol = document.querySelector("ol");
let title = document.querySelector("h2");
let phraseArray = getRandomPhraseAsArray(phrases);
let missed = 0;

//phrases array
const phrases = ["banana", "pineapple", "passion fruit", "mango", "strawberry"];

//function that randombly chooses a phrase from the phrases array and returns a character array
function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor(Math.random() * arr.length);
  const splitPhrase = arr[randomPhrase].split("");
  return splitPhrase;
}

//check if a character is a letter
function isCharacterALetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

//function that loops through an array of characters and adss them to the list item
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("id", "phrase");

    if (isCharacterALetter(phraseArray[i])) {
      li.classList.add("letter");
    } else {
      li.classList.add("space");
    }

    li.textContent = phraseArray[i];
    let ul = document.getElementsByTagName("ul")[0];
    ul.appendChild(li);
  }
}

//checkLetter function
function checkLetter(btn) {
  const allLi = document.querySelectorAll(".letter");
  let match = null;
  for (let i = 0; i < allLi.length; i++) {
    if (btn.textContent === allLi[i].textContent) {
      allLi[i].classList.add("show");
      match = btn.textContent;
    }
  }
  return match;
}

//check whether the game has been won or lost
function checkWin() {
  const letter = document.querySelectorAll(".letter");
  const show = document.querySelectorAll(".show");
  if (letter.length === show.length) {
    overlay.classList.add("win");
    overlay.style.display = "flex";
    title.textContent = "YOU WON!";
  } else if (missed > 4) {
    overlay.classList.add("lose");
    overlay.style.display = "flex";
    title.textContent = "YOU LOST!";
  }
}

getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//event listener for the "start game" button
btnReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

//add an event listener to the keyboard
qwerty.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName === "BUTTON") {
    let btn = e.target;
    btn.classList.add("chosen");
    btn.disabled = "disabled";
    let letterFound = checkLetter(btn);
    if (
      letterFound === null &&
      document.querySelectorAll(".tries").length >= 1
    ) {
      missed += 1;
      ol.removeChild(ol.lastElementChild);
    }
    checkWin();
  }
});
