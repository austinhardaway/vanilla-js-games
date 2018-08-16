import Ball from "./src/Ball.js";
import Paddle from "./src/Paddle.js";
import Brick from "./src/Brick.js"
"use strict";



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let rightPressed = false;
let leftPressed = false;
const ball = new Ball(canvas, ctx);
const paddle = new Paddle(canvas, ctx);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle.draw();
    ball.draw();
    let bricks = [];
    bricks.push(new Brick(canvas, ctx, 100, 100));
    bricks.forEach((b) => {
        b.draw();
    })
    paddle.update(rightPressed, leftPressed);
    ball.bounce(paddle, bricks);
    ball.update();
    window.requestAnimationFrame(draw);
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
window.requestAnimationFrame(draw);