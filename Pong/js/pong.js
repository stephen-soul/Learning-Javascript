/**
 * Javascript for Pong example. Based off of https://robots.thoughtbot.com/pong-clone-in-javascript
 */

// Start off with a request animation frame invocation
var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000/60) };

// Now to work on a canvas to play in
var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

// When the page loads, we need to draw the canvas and call a step function with the animate method
window.onload = function () {
    document.body.appendChild(canvas);
    animate(step);
};

// Now let's make the step. It's going to update the objects (ball & paddles), draw them, and repeat
var step = function() {
    update();
    render();
    animate(step);
};

// Now to make the update function
var update = function () {

};

// // Now to make the render function
// var render = function () {
//     context.fillStyle = "#FF00FF";
//     context.fillRect(0, 0, width, height);
// };

// Time to work on paddles
function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.x_speed = 0;
    this.y_speed = 0;
}

Paddle.prototype.render = function () {
    context.fillStyle = "#0000FF";
    context.fillRect(this.x, this.y, this.width, this.height);
};

// Since there's a paddle for the player and the cpu, let's add objects representing such
function Player() {
    this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer() {
    this.paddle = new Paddle(175, 10, 50, 10);
}

// When we render the cpu or player, we'll render their paddle
Player.prototype.render = function () {
    this.paddle.render();
};

Computer.prototype.render = function () {
    this.paddle.render();
};

// Lastly we need to make the ball
function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 3;
    this.radius = 5;
}

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#000000";
    context.fill();
};

// Now to build the objects and update the render function
var player = new Player();
var computer = new Computer();
var ball = new Ball();

var render = function() {
    context.fillStyle = "#FF00FF";
    context.fillRect(0, 0, width, height);
    player.render();
    computer.render();
    ball.render();
};