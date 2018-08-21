import Snake from "./src/Snake.js";
import { Vec } from "./src/Structs.js";
import Apple from "./src/Apple.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const snake = new Snake(canvas, ctx);
const apple = new Apple(canvas, ctx);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.draw();
  apple.draw();
  snake.update();

  requestAnimationFrame(draw);
}

function keyDownHandler(e) {
  console.log(e.keyCode);
  if (e.keyCode === 39) {
    //right
    snake.vel = new Vec(1, 0);
  } else if (e.keyCode === 37) {
    //left
    snake.vel = new Vec(-1, 0);
  } else if (e.keyCode === 38) {
    //up
    snake.vel = new Vec(0, -1);
  } else if (e.keyCode === 40) {
    //down
    snake.vel = new Vec(0, 1);
  }
}

document.addEventListener("keydown", keyDownHandler, false);

requestAnimationFrame(draw);
