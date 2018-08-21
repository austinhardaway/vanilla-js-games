import { Vec } from "./Structs.js";

export default class Apple {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pos = new Vec(
      Math.floor(Math.random() * (canvas.width - 8)),
      Math.floor(Math.random() * (canvas.height - 8))
    );
    this.r = 6;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, false);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.closePath();
  }
  handleCollision(snake) {
    if (
      snake.pos.x + snake.w < this.pos.x &&
      snake.pos.x > this.pos.x &&
      snake.pos.y + snake.h < this.pos.y &&
      snake.pos.y < this.pos.y
    ) {
      console.log("HIT");
    }
  }
}
