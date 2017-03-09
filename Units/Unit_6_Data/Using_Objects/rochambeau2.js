var rochambeau = {

    gamesPlayed: 0,

    WIN: 1,
    LOSE: -1,
    TIE: 0,

    player:  {
        choice: null,
        wins: 0
    },

    computer: {
        choice: null,
        wins: 0
    },

    choices: new Array("Rock", "Paper", "Scissors"),

    storeChoices: function(choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.computer.choice = Math.floor(Math.random() * 3);
    },

    score: function() {
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;
    },

    playGame: function () {
        ++this.gamesPlayed;
        // Here is the game ruleset algorithm
        if (this.player.choice == this.computer.choice) {
            // We have a tie!
            console.log("tie");
            return this.TIE;
        }
        else if (this.player.choice == 0 && this.computer.choice == 2) {
            // Rock beats scissors - a win!
            ++this.player.wins;
            console.log("Player Wins: " + this.player.wins);
            return rochambeau.WIN;
        }
        else if (this.player.choice == 1 && this.computer.choice == 0) {
            // Paper beats scissors - a win!
            ++this.player.wins;
            console.log("Player Wins: " + this.player.wins);
            return this.WIN;
        }
        else if (this.player.choice == 2 && this.computer.choice == 1) {
            // Scissors beats paper - a win!
            ++this.player.wins;
            console.log("Player Wins: " + this.player.wins);
            return this.WIN;
        }
        else {
            // All other combinations are losses
            ++this.computer.wins;
            console.log("Computer Wins: " + this.computer.wins);
            return this.LOSE;
        }
    },

    displayScoreBoard: function(winsId, lossesId, tiesId) {
        document.getElementById(winsId).innerHTML = this.player.wins;
        document.getElementById(lossesId).innerHTML = this.computer.wins;
        document.getElementById(tiesId).innerHTML = this.gamesPlayed - (this.player.wins + this.computer.wins);
    },

    displayGameResult: function(resultId) {
        // Now play the game and store the result
        var result = this.playGame();
        console.log(result);
        // Create a message for the player
        var message = "Your choice was " + this.choices[this.player.choice] + " and the computer's choice was " + this.choices[this.computer.choice] + "<br/>";
        // Add to the base message if it was a win, loss, or tie
        if (result == this.WIN) {
            // Display that it was a win
            document.getElementById(resultId).innerHTML = message + "YOU WIN!";
            document.getElementById(resultId).className = "alert alert-success";
        }
        else if (result == this.LOSE) {
            // Display that it was a loss
            document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
            document.getElementById(resultId).className = "alert alert-danger";
        }
        else {
            // Display that it was a tie
            document.getElementById(resultId).innerHTML = message + "A tie. ";
            document.getElementById(resultId).className = "alert alert-info";
        }
    }
};
