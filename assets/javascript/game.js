var computerChoices = [["s","t","a","r","k"],["t","y","r","e","l","l"],["l","a","n","n","i","s","t","e","r"],["t","a","r","g","a","r","i","a","n"],["g","r","e","y","j","o","y"]]
var win = 0;
var losses = 0;
var guesses = 12;
var guessedLetters = [];

document.onkeydown = function(Event) {
    var userGuess = event.key;

    var pickName = (Math.floor(Math.random() * computerChoices.length) - 1);
    
    var nameBlanks = "";
    guessedLetters.push(userGuess);
    for (var i = 0; i < computerChoices[pickName].length; i++)
    {
        for (var j = 0; j < guessedLetters.length; j++) {
            if (guessedLetters[j] == computerChoices[pickName][i])
            nameBlanks = nameBlanks + guessedLetters[j];
            else {
                nameBlanks = nameBlanks + "_ ";
            }
        }
    }
    var html = 
        "<p>" + nameBlanks + "</p>";

    document.querySelector("#game").innerHTML = html;
}