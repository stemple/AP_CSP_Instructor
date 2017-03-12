// Stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0,0,0];

// Stores the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors
var playerChoice;
var computerChoice;

/**
 * Game rules are executed with game result
 * @returns {number} The result, 1 = win, 0 = tie, -1 = loss
 */
function playGame(){
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    } else if (playerChoice == 0 && computerChoice == 2) {
        // Rock beats scissors - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 1 && computerChoice == 0) {
        // Paper beats scissors - a win!
        console.log("win");
        return 1;
    } else if (playerChoice == 2 && computerChoice == 1) {
        // Scissors beats paper - a win!
        console.log("win");
        return 1;
    } else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

/**
 * Displays the number of wins, losses, ties
 * @param {number} winsId   id of element to contain # of wins
 * @param {string} lossesId id of element to contain # of losses
 * @param {string} tiesId   id of element to contain # of ties
 */
function displayScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
}

/**
 * Updates the score given an index
 * @param {number} val 0 = win, 1 = tie, 2 = loss
 */
function updateScore(val){
    ++score[val];
    console.log("The score is now " + score);
}


/**
 * Displays the result of the game
 * @param {string} resultId The element id where the result will be written
 */
function displayGameResult(resultId){
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Display that it was a tie
        updateScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

/**
 * Stores the player's choice, then call's the function for storing the computer's choice
 * @param {number} choice 0,1,2 for rock, paper, scissors
 */
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

/**
 * Randomly generates a 0,1,2 for rock, paper, scissors
 */
function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random()*3);
    console.log("Computer choice = " + computerChoice);
}
