var inquirer = require("inquirer");

function Letter(underscore){
    // A string value to store the underlying character for the letter
    this.underscore = underscore;
    // A boolean value that stores whether that letter has been guessed yet
    this.correct = false;
    // this.word = "[f][u][l][l][s][t][a][c][k]";
    // this.word="[] [] [] [] [] [] [] [] []";
    this.showWord=function(){
        if (this.correct){
            console.log(this.word);
        }else{
            console.log("_ _ _ _ _")
        }
    }
}


// var letter1= new Letter("a");
// letter1.showWord();

//export Letter constructor so that Word.js can use it.
module.exports = Letter