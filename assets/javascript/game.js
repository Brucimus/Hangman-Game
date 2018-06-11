var computerChoices = [["s","t","a","r","k"],["t","y","r","e","l","l"],["l","a","n","n","i","s","t","e","r"],["t","a","r","g","a","r","i","a","n"],["g","r","e","y","j","o","y"]]
var win = 0;
var losses = 0;
var guesses = 12;
var guessedLetters = [];
var nameBlanks = ""
var pickName = -1;
var guessedLetterInWord = false;
var tempLetter = "";

document.onkeydown = function(Event) {
    var userGuess = event.key;

    pickName =  2;//(Math.floor(Math.random() * computerChoices.length) - 1);
    
    nameBlanks = "";
    
    guessedLetters.push(userGuess);
    for (var i = 0; i < computerChoices[pickName].length; i++)
    {
        for (var j = 0; j < guessedLetters.length; j++) {
            if (guessedLetters[j] === computerChoices[pickName][i]) {
                guessedLetterInWord = true;
                tempLetter = guessedLetters[j];
                nameBlanks = nameBlanks + tempLetter + " ";
                break;
            }
            else {
                guessedLetterInWord = false;
            }
        }
        if (guessedLetterInWord === false) {
            nameBlanks = nameBlanks + "_ ";
            }

    }
    var html = 
        "<p>" + nameBlanks + "</p>";

    document.querySelector("#game").innerHTML = html;
}