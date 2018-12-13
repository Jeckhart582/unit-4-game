// 1. Make variables for each crystal and assign them a random value that last for the length of the "round".
    // 1 ed -  instead of making a variable for each crystal, I made a loop that applies classes and attributes to each crystal
// 2. Generate a random number the user has to guess.
// 3. Display the value of the crystal that the user had clicked on.
// 4. Add the values of the crystals to the total of user guess.
// 5. If the userValue is equal to the random number, add a point to wins and reset the game.
// 6. If the userValue is greater than the random number, track a loss and reset the game.

// Variables needed: yellowCrystal, redCrystal, blueCrystal, greenCrystal, randomNumber, userGoal, totalWin, totalLoss
// Functions needed: refresh the crystal number, refresh the "goal" nubmers, and basic addition of crystal values to equal goal.
var images = ["./assets/images/blue.png", "./assets/images/green.jpg", "./assets/images/yellow.png", "./assets/images/red.png"]
var totalWins = 0;
var totalLoss = 0;
var score = 0;

function randomNumberFunction () {
    goalNumber = Math.floor(Math.random() * 102) + 19;
}

function refreshCrystals () {
    for ( var i = 0; i < images.length; i++) {
        // Selects the image and ties it to a variable
        var crystal = $("<img>");
        // Adds a class of "crystal" to the variable crystal
        crystal.addClass("crystal");
        // Applies an images to the variable of crystal, which gets looped for each image
        crystal.attr("src", images[i]);
        // Applies a random value between 1 and 12 to each instances of the array
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        // Adds uniform height to each crystal
        crystal.attr("height", "200");
        crystal.attr("width", "200");
        // Selects the .html space and appends each crystal variable
        $(".image-container").append(crystal);
    }
}

function refreshNumbers () {
    // Tracks the number of wins
    $("#wins-text").text("Wins: " + totalWins)
    // Selects and tracks the number of losses
    $("#loss-text").text("Losses: " + totalLoss);
}

function resetGame() {
    // Reset the random computer number
    randomNumberFunction();
    // Reset the goal score to zero
    score = 0;
    // Empty out the crystal images
    $(".image-container").empty();
    // Refresh the values on crystals
    refreshCrystals ();
     // Applies the interger to the .html space
     $(".randomNumber-text").text("Your goal is: " + goalNumber);
};

resetGame();
refreshNumbers();

function onClick () {
    // Adds the attribute "value" of this "crystal" to the score
    score += parseInt($(this).attr("value"));
    // Selects score text, and writes the new total in the html
    $("#score-text").html("Your total is: " + score);
    // Keeps track of score and resets on victory or loss
    if (score == goalNumber) {
        $("#wins-text").text("Wins: " + totalWins++);
        resetGame();
    }
    else if (score > goalNumber) {
        $("#loss-text").text("Losses: " + totalLoss++);
        resetGame();
    };
};

$(document).on("click", ".crystal", onClick)

