var word = require('./word.js');
var inquirer = require('inquirer');

var worldReligions=[
    'christianity','islam','nonreligious','hinduism','chinesetraditional',
    'buddhism','primalindigenous','africantraditional',
    'sikhism','juche','spiritism','judaism','bahai','jainism','shinto',
    'caodai','zoroastrianism','tenrikyo','neoPaganism','unitarianuniversalism'
]


//Counters for wins, losses, and guesses remaining.
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var userGuess = "";
var guessedWord = [];
var guessedWordArray = [];
var score=0;

// Randomly selects a word and uses the `Word` constructor to store it
    //once you enter return it doesn't go below it, so startQuestion() never runs  

	var index = Math.floor(Math.random() * worldReligions.length);
	console.log(index);
	worldReligions[index];
	console.log(worldReligions[index]);
	for(var i =0; i < worldReligions.length; i++)
	{
		guessedWord.push("_");
	}
	


//Use Inquirer package to display game confirmation prompt to user.
function startQuestion() {

	console.log("Game started");
	

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
        }else{
			console.log();
			console.log("Maybe Next Time.")
		}
		

    });
}


function LetterInquirer(input)
{
  inquirer.prompt([
    {
        type: 'text',
        name: 'playerName',
        message: 'Please enter a letter for a World Religion?'
	}]).then(function()
	
{  
	guessesRemaining--;

        if(guessesRemaining > 0)
        {
			LetterInquirer();
		}	
		 
		else if (input === worldReligions[index]){
			
				console.log('YOU WON!.');
				wins++;
				console.log("Wins: " + wins);
				console.log("Losses: " + losses);
				resetGame();
		}else if(guessesRemaining===0){
					console.log('YOU LOST!');
					console.log("The correct Religion was: " + worldReligions[index]);
					losses++;
					console.log("Wins: " + wins);
					console.log("Losses: " + losses);
					resetGame();
				}else{
				console.log("Game Over");
			}
		})
};


//  function randomWord(){
// // Randomly selects a word and uses the `Word` constructor to store it
//     //once you enter return it doesn't go below it, so startQuestion() never runs  
//     worldReligions[index];
//     console.log(worldReligions[index]);
   
     
// };

function resetGame() {
	console.log("Do you want to play agin?")
    userGuess ="";
    guessedWordArray = [];
	guessesRemaining = 9;
	LetterInquirer();
}

startQuestion();


