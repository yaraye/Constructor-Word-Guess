var Letter = require("./letter.js");


function Word(wordString) {
    //chose word from the list
    this.wordString=wordString;
    //random word choice
    this.letterArray = [];

    this.underscore=[];
    
    this.returnLetters = function() {
       this.letterArray = this.wordString.split(" ");
       underscore= this.letterArray.length;
       console.log(this.underscore.join(" "));
    }
    this.showletter=function(){
        for(let i = 0; i < letterArray.length; i++) {
          let newLetter = new Letter(letterdArr[i]);
          this.letters.push(newLetter);
        }
      
    };

}
    

//Export the Word constructor as a reference in index.js.

module.exports = Word;