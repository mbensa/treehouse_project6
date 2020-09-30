//declare variables
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector("a");
const overlay = document.getElementById("overlay");
const ol = document.querySelector("ol");
let missed = 0;

//phrases array
const phrases = ["banana", "pineapple", "passion fruit", "mango", "strawberry"];

//event listener for the "start game" button
btnReset.addEventListener("click", () => {
  overlay.style.display = "none";
});

//function that randombly chooses a phrase from the phrases array and returns a character array
function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor(Math.random() * arr.length);
  const splitPhrase = arr[randomPhrase].split("");
  return splitPhrase;
}

getRandomPhraseAsArray(phrases);

//check if a character is a letter
function isCharacterALetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

//function that loops through an array of characters and adss them to the list item
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isCharacterALetter(phraseArray[i])) {
      let li = document.createElement("li");
      li.setAttribute("id", "phrase");
      li.setAttribute("class", "letter");
      li.textContent = phraseArray[i];
      let ul = document.getElementsByTagName("ul")[0];
      ul.appendChild(li);
    } else {
      let li = document.createElement("li");
      li.setAttribute("id", "phrase");
      li.textContent = phraseArray[i];
      let ul = document.getElementsByTagName("ul")[0];
      ul.appendChild(li);
    }
  }
}
let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//checkLetter function
function checkLetter(btn) {
  const allLi = document.querySelectorAll(".letter");
  let match = null;
  for (let i = 0; i < allLi.length; i++) {
    if (btn.textContent === allLi[i].textContent) {
      allLi[i].setAttribute("class", "show");
      match = btn.textContent;
    }
  }
  return match;
}

//add an event listener to the keyboard
qwerty.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.nodeName === "BUTTON") {
    let btn = e.target;
    btn.setAttribute("class", "chosen");
    btn.disabled = "disabled";
    let letterFound = checkLetter(btn);
    if (letterFound === null) {
      missed += 1;
      ol.removeChild(ol.lastElementChild);
    }
  }
});
