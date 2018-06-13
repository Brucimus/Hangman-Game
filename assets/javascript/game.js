var computerChoices = [["s","t","a","r","k"],
    ["t","y","r","e","l","l"],
    ["l","a","n","n","i","s","t","e","r"],
    ["t","a","r","g","a","r","y","a","n"],
    ["g","r","e","y","j","o","y"],
    ["a","r","r","y","n"],
    ["m","a","r","t","e","l","l"],
    ["b","a","r","a","t","h","e","o","n"],
    ["b","a","e","l","i","s","h"],
    ["t","u","l","l","y"],
    ["b","o","l","t","o","n"],
    ["s","e","a","w","o","r","t","h"],
    ["s","n","o","w"],
    ["m","o","r","m","o","n","t"]]
var availableUserChoices = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var win = 0;
var losses = 0;
var guesses = 12;
var guessedLetters = [];
var nameBlanks = ""
var pickName = -1;
var guessedLetterInWord = false;
var tempLetter = "";
var gameOver = true;

document.onkeydown = function(Event) {
    var userGuess = event.key;

    //allows uper case guesses
    userGuess = userGuess.toLowerCase();

    //chooses new name if game is over
    if (gameOver === true) {
    pickName = Math.floor(Math.random() * computerChoices.length);
    gameOver = false;
    }
    
    //limits options to letters
    if (availableUserChoices.includes(userGuess) == false) {
        return;
    }

    //doesn't push letters to guessed letters list if repeated letter
    nameBlanks = "";
    if (guessedLetters.includes(userGuess)) {
        return;
    } else {
        guessedLetters.push(userGuess);
    }
    

    //recreates word every time letter is pressed
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

    if (nameBlanks.includes("_") === false) {
        win++;
        gameOver = true;
        nameBlanks = "";
        guesses = 12;
        guessedLetters = [];
    } else {
        guesses--;
    }

    if (guesses == 0) {
        losses++;
        gameOver = true;
        nameBlanks = "";
        guesses = 12;
        guessedLetters = [];
    }

    var html = 
        "<p>" + nameBlanks + "</p>";

    document.querySelector("#game").innerHTML = html;

    //display wins on on html
    var htmlWins = 
        "<p>wins: " + win + "</p>";

    document.querySelector("#wins").innerHTML = htmlWins;

    //displays guesses left
    var htmlGuessesLeft = 
        "<p>Guesses Left: " + guesses + "</p>";

    document.querySelector("#guessesLeft").innerHTML = htmlGuessesLeft;

    //display losses on on html
    var htmlLosses = 
        "<p>losses: " + losses + "</p>";

    document.querySelector("#losses").innerHTML = htmlLosses;

    //displays guessed letters
    var htmlGuessed = 
        "<p>guessed letters:</p>" +
        "<p>" + guessedLetters + "</p>";
        
    document.querySelector("#guessed").innerHTML = htmlGuessed;
}