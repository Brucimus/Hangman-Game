var computerChoices = [["s","t","a","r","k"],["t","y","r","e","l","l"],["l","a","n","n","i","s","t","e","r"],["t","a","r","g","a","r","i","a","n"],["g","r","e","y","j","o","y"]]
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
    var html = 
        "<p>" + nameBlanks + "</p>" +
        "<p>" + guessedLetters + "</p>";

    document.querySelector("#game").innerHTML = html;
}