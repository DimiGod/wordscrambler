
var words= [
    "yeet",
    "cookie",
    "pretty",
    "blue",
    "red",
    "apple",
    "dollar",
    "Baby",
    "Turtle",
    "Camaro"
];


var word = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;


while (remainingLetters > 0) {

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {

break;

} else if (guess.length !== 1) {
alert("Please enter a single letter.");

} else {


for (var j = 0; j < word.length; j++) {
  if (word[j] === guess) {
    answerArray[j] = guess; remainingLetters--;
  }
}
}

}


alert(answerArray.join(" "));
alert("Good job! The answer was " + word);



var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var pickWord = function () {

};

var setupAnswerArray = function (word) {

};
var showPlayerProgress = functin (answerArray)
{

};

var getGuess = function () {

};

var updateGameState = function (guess, word, answerArray) {

};

var showAnswerAndCongratulatePlayer = function (answerArray) {

};
while (remainingLetters > 0) {
showPlayerProgress(answerArray);
var guess = getGuess();
if (guess === null) {
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
var correctGuesses = updateGameState(guess, word, answerArray);
remainingLetters -= correctGuesses;
}
}

showAnswerAndCongratulatePlayer(answerArray);