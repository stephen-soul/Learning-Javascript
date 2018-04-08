"use strict";
// Global variables
// Make a var for the random number for the player object (1-19)
var playerX = Math.floor(Math.random() * 20);
var playerO = Math.floor(Math.random() * 20);
// Make a var for the prize dependant on the player spot
var prizeX = 0;
var prizeO = 0;
var display = [];
var score;
/*
* BLOCK OF CODE TO HANDLE THE POSITIONS OF THE PLAYER AND THE PRIZE
*/
if(playerX < 10) {
    // If X is less than 10, make the prize player + 10
    prizeX = playerX+10;
} else if (playerX > 10) {
    // If X is more than 10, make the prize player - 10
    prizeX = playerX-10;
}
if(playerO <= 10) {
    // if O is less than 10, make the number playerO + 10
    prizeO = playerO+10;
} else if (playerO > 10) {
    // If O is greater than 10 make the number playerO - 10
    prizeO = playerO-10;
}
if(playerX === 10)
    prizeX = 19;
if(playerO === 10)
    prizeO = 19;
// Function for index.html to save the name entered as a session item
function passName() {
    var name;
    // Get the value of the name input
    name = document.getElementById("nameInput").value;
    // Make session storage and then switch the page
    sessionStorage.setItem("name", name);
}

// Function to see if the name exists. If not, redirect the user
function checkIfNameExists() {
    // Check if the session storage is null; if so redirect, else, do stuff
    if(sessionStorage.getItem("name") === null) {
        window.location.href = "index.html";
    }
}

// Function to "return the name." stores it and calls the drawMaze function passing it the score and name
function returnName() {
    // Get the name from session scope
    var name = sessionStorage.getItem("name");
    score = 0;
    drawMaze(name, score)
}

/*
 * Button movement
 */

function buttonUp() {
    if(display[playerO][playerX][0] != 0) {
        score++;
        document.getElementById("score").innerHTML = "Your score is "+score+"!";
        document.getElementById(playerO + "-" + playerX).innerHTML = "";
        playerO--;
        document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
    }
}

function buttonDown() {
    if(display[playerO][playerX][2] != 0) {
        score++;
        document.getElementById("score").innerHTML = "Your score is "+score+"!";
        document.getElementById(playerO + "-" + playerX).innerHTML = "";
        playerO++;
        document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
    }
}

function buttonLeft() {
    if(display[playerO][playerX][3] != 0) {
        score++;
        document.getElementById("score").innerHTML = "Your score is "+score+"!";
        document.getElementById(playerO + "-" + playerX).innerHTML = "";
        playerX--;
        document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
    }
}

function buttonRight() {
    if(display[playerO][playerX][1] != 0) {
        score++;
        document.getElementById("score").innerHTML = "Your score is "+score+"!";
        document.getElementById("score").innerHTML = "Your score is "+score+"!";
        document.getElementById(playerO + "-" + playerX).innerHTML = "";
        playerX++;
        document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
    }
}

/*
 *
 * End of Button movement
 */

// More events for movement keys
window.onkeydown=function(event) {

    switch(event.keyCode) {
        case 87: // W
            if(display[playerO][playerX][0] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerO--;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 65: // A
            if(display[playerO][playerX][3] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerX--;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 83: // S
            if(display[playerO][playerX][2] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerO++;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 68: // D
            if(display[playerO][playerX][1] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerX++;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 38: // Up Arrow
            if(display[playerO][playerX][0] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerO--;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 37: // Left arrow
            if(display[playerO][playerX][3] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerX--;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 40: // Down arrow
            if(display[playerO][playerX][2] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerO++;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;

        case 39: // Right arrow
            if(display[playerO][playerX][1] != 0) {
                score++;
                document.getElementById("score").innerHTML = "Your score is "+score+"!";
                document.getElementById(playerO + "-" + playerX).innerHTML = "";
                playerX++;
                document.getElementById(playerO + "-" + playerX).innerHTML = "<img src='img/icons8-mankey-15.png' alt='player'/>";
                if(playerO === prizeO && playerX === prizeX) {
                    setTimeout(callWinner, 10);
                }
            }
            break;
    }
};

function callWinner() {
    alert("You win in "+score+" moves! Back to home page!");
    window.location.href = "index.html";
}

// Function to "draw" the maze to the screen, calling on the maze made from the tutorial
function drawMaze(name, score) {
    // Make the mazeWelcome ID a var so we can add to it
    var welcomeMessage = document.getElementById("mazeWelcome");
    // Make a custom message with the users name
    welcomeMessage.innerHTML = "Welcome, "+name+"!<br>";
    document.getElementById("score").innerHTML = "Your score is: "+score+"<br>";
    // Make a var for the display that draws the maze
    display = generateNewMaze(20,20);
    for (var i = 0; i < display.length; i++) {
        $('#maze > tbody').append("<tr>");
        for (var j = 0; j < display[i].length; j++) {
            var selector = i+"-"+j;
            $('#maze > tbody').append("<td id='"+selector+"'>&nbsp;</td>");
            // Check if the selector = where the prize is. If it is, set it
            if (selector === prizeO+"-"+prizeX) {
                // If the selector matches the prize set it to the prize
                document.getElementById(prizeO+"-"+prizeX);
                document.getElementById(prizeO+"-"+prizeX).innerHTML="<img src='img/icons8-sweet-banana-15.png' alt='prize'/>";
            }
            // Check if the selector = where the player is. If it is, set it
            if (selector === playerO+"-"+playerX) {
                // If the selector matches the player set it to the player
                document.getElementById(playerO+"-"+playerX);
                document.getElementById(playerO+"-"+playerX).innerHTML="<img src='img/icons8-mankey-15.png' alt='player'/>";
            }
            if (display[i][j][0] == 0) {
                $('#' + selector).css('border-top', '2px solid white');
            }
            if (display[i][j][1] == 0) {
                $('#' + selector).css('border-right', '2px solid white');
            }
            if (display[i][j][2] == 0) {
                $('#' + selector).css('border-bottom', '2px solid white');
            }
            if (display[i][j][3] == 0) {
                $('#' + selector).css('border-left', '2px solid white');
            }
        }
        $('#maze > tbody').append("</tr>");
    }
}
/*
 * Function from the tutorial http://dstromberg.com/2013/07/tutorial-random-maze-generation-algorithm-in-javascript/
 * Generates a randomly generated maze
 */
function generateNewMaze(x, o) {
    // Start with variables
    var totalCells = x * o;
    var cells = [];
    var unvisitedCells = [];
    // For loop to establish nested arrays and default values
    for (var i = 0; i < o; i++) {
        cells[i] = [];
        unvisitedCells[i] = [];
        for (var j = 0; j < x; j++) {
            cells[i][j] = [0,0,0,0];
            unvisitedCells[i][j] = true;
        }
    }
    /*
     * Now we need a random place to start. Because the maze is generated around the starting point, this increases
     * randomness. Now we need to tell the maze that the starting point has been visited. Store the cell in the path,
     * And whenever a dead end is reached, trace back the steps and start a path in a new direction.
     */
    var currentCell = [Math.floor(Math.random()*o), Math.floor(Math.random()*x)];
    var path = [currentCell];
    unvisitedCells[currentCell[0]][currentCell[1]] = false;
    var visited = 1;
    // Now a while loop to check if all the cells have been visited yet
    while (visited < totalCells) {
        // With starting cell in place, determine which direction to go
        var potential = [[currentCell[0]-1, currentCell[1], 0, 2], // <-- Top
                        [currentCell[0], currentCell[1]+1, 1, 3], // <-- Right
                        [currentCell[0]+1, currentCell[1], 2, 0], // <-- Bottom
                        [currentCell[0], currentCell[1]-1, 3, 1]]; // <-- Left
        var neighbours = [];
        // With each potential neighbour defined, check them in a series of conditions
        for (var l = 0; l < 4; l++) {
            if (potential[l][0] > -1 &&     // Is the y value of the neighbor inside the maze?
                potential[l][0] < o &&      // Is the y value of the neighbor inside the maze?
                potential[l][1] > -1 &&     // Is the x value of the neighbor inside the maze?
                potential[l][1] < x &&      // Is the x value of the neighbor inside the maze?
                unvisitedCells[potential[l][0]][potential[l][1]]) {
                    neighbours.push(potential[l]);
            }
        }
        // Once we determine which neighbours are available, check to ensure we end up with at least one
        if(neighbours.length) {
            var next = neighbours[Math.floor(Math.random()*neighbours.length)];
            // Now that a neighbour is chosen, we need to knock the wall down between the neighbour and the cell
            cells[currentCell[0]][currentCell[1]][next[2]] = 1;
            cells[next[0]][next[1]][next[3]] = 1;
            // With the walls removed, we need to move the neighbour cell & set it to current cell for repeating
            unvisitedCells[next[0]][next[1]] = false;
            visited++;
            // Now we can set the current cell equal to the value of the neighbour and add it
            currentCell = [next[0], next[1]];
            path.push(currentCell);
        } else {
            currentCell = path.pop();
        }
    }
    // Finally, return the cells
    return cells;
}
