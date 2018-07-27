var Word = require('./Word.js');
var inquirer = require('inquirer');

var worldReligions=[
    'Christianity','Islam','Nonreligious','Hinduism','Chinesetraditional',
    'Buddhism','Primalindigenous','Africantraditional',
    'Sikhism','Juche','Spiritism','Judaism','Bahai','Jainism','Shinto',
    'CaoDai','Zoroastrianism','Tenrikyo','NeoPaganism','UnitarianUniversalism'
]



//Counters for wins, losses, and guesses remaining.
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var userGuess = "";
var lettersAlreadyGuessedList = "";
var lettersAlreadyGuessedListArray = [];
var score=0;



//Use Inquirer package to display game confirmation prompt to user.
function startQuestion() {
	inquirer.prompt[
	 {
	 	type: 'text',
	 	name: 'playerName',
	 	message: 'What is your name?'
	 },
	 {
	    type: 'confirm',
	    name: 'readyToPlay',
	    message: 'Are you ready to play?',
	    default: true
	  },{
	validate:function(){
		//If the user confirms to play, start game.
		if (answers.readyToPlay){
			console.log(gameTextColor("Great! let's name all the major Religion in the world  , " + answers.playerName + ". "));
			startGame();
		}

		else {
			//If the user don't want to play, exit game.
			console.log(gameTextColor("Maybe next time, " + answers.playerName + "!"));
			return;
        }
    }
}, {
        name: 'letterGuessed',
        message: 'Guess a letter',
        validate: function (value) {
            var valid = (value.length === 1) && ('abcdefghijklmnopqrstuvwxyz'.
            indexOf(value.charAt(0).toUpperCase() + value.slice(1))!== -1); // fix letter logic later
            return valid || 'Please enter a single letter';
        },
        when: function () {
            return (!userGuess.guessed() && guessesRemaining > 0);
        }
    },
    {
        type: 'confirm',
        name: 'playAgain',
        message: 'Want to play again?',
        // default: true,
        when: function () {
            return (userGuess.guessed() || guessesRemaining <= 0);
        }
    
      }
    ];
}



//game starter
function startGame(){
guessesRemaining = 9;
lettersAlreadyGuessedList = "";
lettersAlreadyGuessedListArray = [];
 
// Randomly selects a word and uses the `Word` constructor to store it
    var index = Math.floor(Math.random() * worldReligions.length);
    return worldReligions[index];

    startQuestion();

}

function resetGame() {
    userGuess ="";
    lettersAlreadyGuessedListArray = [];
    guessesRemaining = 9;
}


startGame();
resetGame();