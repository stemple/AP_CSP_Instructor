// This is the varaible that stores the score - wins(1), losses(-1), ties(0).
var score = [0,0,0];

// The variables store the current player's and computer's choices - 0 = Rock, 1 = Paper, 2 = Scissors
var currentChoice;
var computerChoice;

function playGame(){
    computerChoice = Math.ceil(Math.random()*2);
    console.log("Computer Choice = " + computerChoice);
    console.log("Player Choice = " + currentChoice);
    if (currentChoice == computerChoice) {
        // We have a tie!
        return 2;
    } else if (currentChoice == 0 && computerChoice == 2) {
        // Rock beats scissors - a win!
        return 0;
    } else if (currentChoice == 1 && computerChoice == 0) {
        // Paper beats scissors - a win!
        return 0;
    } else if (currentChoice == 2 && computerChoice == 1) {
        // Scissors beats paper - a win!
        return 0;
    } else {
        // All other combinations are losses
        return 1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[1];
    document.getElementById(tiesId).innerHTML = score[2];
}

function updateScore(val){
    ++score[val];
}

function displayGameResult(resultId){
    var choices = ["Rock", "Paper", "Scissors"];
    var result = playGame();
    updateScore(result);
    var message = "Your choice was " + choices[currentChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    if (result == 0) {
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "YOU WIN! " + score;
    } else if (result == 1) {
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! " + score;
    } else {
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "A tie. " + score;
    }
}

function storePlayerChoice(choice) {
    currentChoice = choice;
}
