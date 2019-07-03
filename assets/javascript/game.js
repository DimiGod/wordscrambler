
var words= [
    "yeet",
    "cookie",
    "pretty",
    "blue",
    "red",
    "apple",
    "dollar"
];

var word= words[Math.floor(math.random()*words.length)];

var answerArray=[];
for (var i=0; i< word.length;i++) {
    answerArray[i]="_";
}

var remainingLetters= word.length;

while (remainingLetters>0) {

    alert(answerArray.join(""));

    var guess= prompt("Guess a letter, or click cancel to stop playing.");
    if(guess=== null){
        break;
    } else if (guess.length !==1) {
        alert("please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j]===guess){
                answerArray[j]= guess;
                remainingLetters--;
            }
        }
    }
    alert(answerArray.join(""));
    alert("You guessed it! The word was "+ word);
}
