const colors = ["green", "yellow", "red"];

export default class Brick {
  constructor(canvas, ctx, x, y, h = 20, w = 50) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.health = 3;
  }

  hits(ball) {
    return (
      ball.x > this.x &&
      ball.x < this.x + this.w &&
      ball.y > this.y &&
      ball.y < this.y + this.h
    );
  }

  draw() {
    if (this.health > 0) {
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.w, this.h);
      this.ctx.fillStyle = colors[this.health];
      this.ctx.fill();
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
}
