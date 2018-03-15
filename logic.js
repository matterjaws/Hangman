var jojoStandsList = ["golden Experience", "star platinum", "tusk"];

var chosenWord = "";

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGUesses = [];

var letterGuessed = "";


var winCounter = 0;
var lossCounter = 0;
var numGuess = 9;










function startGame() {

	numGuess = 9;

	chosenWord = jojoStandsList[Math.floor(Math.random() * jojoStandsList.length)];

	lettersInChosenWord = chosenWord.split("");

	numBlanks = lettersInChosenWord.length

	console.log(chosenWord);

}