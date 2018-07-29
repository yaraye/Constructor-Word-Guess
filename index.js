var word = require('./word.js');
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
var guessedWord = "";
var guessedWordArray = [];
var score=0;

// Randomly selects a word and uses the `Word` constructor to store it
    //once you enter return it doesn't go below it, so startQuestion() never runs  
var index = Math.floor(Math.random() * worldReligions.length);
console.log(index);


//Use Inquirer package to display game confirmation prompt to user.
function startQuestion() {

    console.log("Inquirer started");

	inquirer.prompt([
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
      }
    ]).then(function(inquirerResponse){
     
        //Now it has all your results from above
        if(inquirerResponse.readyToPlay == true)
        {
			LetterInquirer();
        }

    });
}


function LetterInquirer()
{
  inquirer.prompt([
    {
        type: 'text',
        name: 'playerName',
        message: 'Please enter a letter for a World Religion?'
	}]).then(function()
	
{  guessesRemaining--;

        if(guessesRemaining > 0)
        {
			LetterInquirer();
        }
        else
        {
            console.log("Game Over");
            //You can add another inquirer here and ask if they want to play again.
		if(guessesRemaining===0){
				console.log('YOU LOST!');
				console.log("The correct Religion was: " + index);
				losses++;
				console.log("Wins: " + wins);
				console.log("Losses: " + losses);
				resetGame()
			}else if ( userGuess === index){
				console.log('YOU WON!.');
				wins++;
				console.log("Wins: " + wins);
				console.log("Losses: " + losses);
				resetGame();
			}else{
				resetGame();
			}
}
});
}


// //game starter
// function startGame(){
// console.log("Game Started");
// guessesRemaining = 9;
// guessedWord = ""; 
// if (guessedWord.length<worldReligions.length)
// {
// 	guessedWord=randomWord();

// }else
// console.log('YOU WON!.');

// if (guessedWord){
// 	word=new word(guessedWord);
// 	word.LetterInquirer();
// 	LetterInquirer();

// }

 function randomWord(){
// Randomly selects a word and uses the `Word` constructor to store it
    //once you enter return it doesn't go below it, so startQuestion() never runs  
    worldReligions[index];
    console.log(worldReligions[index]);
    startQuestion();
     
};

function resetGame() {
    userGuess ="";
    guessedWordArray = [];
    guessesRemaining = 9;
}

startQuestion();


