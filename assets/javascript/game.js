// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// Your game will hide this amount until the player clicks a crystal. When they do click one, update the player's score counter. 
//The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. 
//Of course, the user's score (and score counter) will reset to zero. The app should show the number of games the player wins and loses.
// To that end, do not refresh the page as a means to restart the game.
// Option 1 Game design notes The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

var randomResult;
var loss = 0;
var win = 0;
var previousNum = 0;


var startAndResetGame = function () {
    $(".crystals").empty();
    var image = [
        "https://cdn.dribbble.com/users/913013/screenshots/3276187/1.jpg",
        "https://cdn.dribbble.com/users/913013/screenshots/3276481/2.jpg",
        "https://cdn.dribbble.com/users/913013/screenshots/3276736/3.jpg",
        "https://cdn.dribbble.com/users/913013/screenshots/3277008/4.jpg"
    ];
randomResult = Math.floor((Math.random() * 102) + 19);
console.log(randomResult);
$("#randomNumber").html(randomResult);

//create 4 crystals divs
for (var i=0; i < 4; i++) {
    var random = Math.floor((Math.random() * 12) + 1);          
    console.log(random);                                                        
    var crystal = $("<div>");                                  
    crystal.attr({                                  //setting class attributes crystal and data-value             
        "class": 'crystal',
        "data-value": random
    });    
    crystal.css ({
        "background-image":"url('" + image[i] + "')",
        "background-size": ("no-repeat", "100% 100%")
    });                     
    $(".crystals").append(crystal);

}
$(".sum").html("Sum: " + previousNum);

}
startAndResetGame();

$(document).on("click", ".crystal", function () {
    var number = parseInt($(this).attr("data-value"));      //onClick and gets data-value
     previousNum += number;
     $(".sum").html("Sum: " + previousNum);
    console.log(previousNum);
   
    if (previousNum > randomResult){
        loss++;
        alert("You lose.");
        $("#losses").html("Losses: " + loss);
        previousNum = 0;
        startAndResetGame();
    } else if (previousNum == randomResult){
        alert("You win!");
        wins++;
        $("#wins").html("Wins: " + wins);
        previousNum = 0;
        startAndResetGame();
    }
});

//Reset after win or lose
function resetGame () {

}