// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var playerAURL, playerBURL, playACharacter, playBCharacter;

function getAPI() {
    var apiLink = "https://swapi.dev/api/people/";

    let min = 0;
    let max = 82;
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    return apiLink + a;
};


function newGame() {

    $('#result').empty();

    playerAURL = getAPI(); 
    playerBURL = getAPI(); 

    //check for duplicated characters

    if (playerAURL === playerBURL) {
        playerBURL = getAPI();
    }

        $.when($.getJSON(playerAURL, function (json) {

        }),
            $.getJSON(playerBURL, function (json) {

            })).then(function (charA, charB) {
                playACharacter = charA[0];
                playBCharacter = charB[0];

                $('#charA').html("<span class='card-title'>" + playACharacter.name + "</span><p>Birth Year: " + playACharacter.birth_year + "</p><p>Height: " + playACharacter.height + "</p><p>Mass: " + playACharacter.mass + "</p>");
                $('#charB').html("<span class='card-title'>" + playBCharacter.name + "</span><p>Birth Year: " + playBCharacter.birth_year + "</p><p>Height: " + playBCharacter.height + "</p><p>Mass: " + playBCharacter.mass + "</p>");


                $('#birthYear').on('click', function () {
                    compareAttributes(playACharacter.birth_year, playBCharacter.birth_year);
                });
                $('#height').on('click', function () {
                    compareAttributes(playACharacter.height, playBCharacter.height);
                });
                $('#mass').on('click', function () {
                    compareAttributes(playACharacter.mass, playBCharacter.mass);
                });

            })
};

$(document).ready(function () {
    newGame();
    $('#newGame').on('click', newGame);
});

function compareAttributes(atr1, atr2) {
    if (atr1 > atr2) {
        $('#result').html("You win this round!!");
    } else if (atr2 > atr1) {
        $('#result').html("You lose this round!!");
    } else if (atr1 === patr) {
        $('#result').html("It's a tie!!");
    } else {
        $('#result').html("An error occured!");
    }
}
