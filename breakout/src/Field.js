import Brick from "./Brick.js";

export default class Field {
  constructor(canvas, ctx, row, col) {
    this.row = row;
    this.col = col;
    this.canvas = canvas;
    this.ctx = ctx;
    this.offset = 30;
    this.hGutter = 5;
    this.vGutter = 15;
    this.w = 50;
    this.h = 20;
    this.hOffset =
      (this.canvas.width - (this.w * this.col + this.hGutter * this.col)) / 2;
    this.rowOffset = 25;
    this.bricks = [];
    this.points = 0;

    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        this.bricks.push(
          new Brick(
            this.canvas,
            this.ctx,
            i * (this.w + this.hGutter) +
              this.hOffset +
              (j % 2) * this.rowOffset,
            j * (this.h + this.vGutter) + this.offset
          )
        );
      }
    }
  }

  draw() {
    this.bricks.filter(b => b.health > 0).forEach(b => {
      b.draw();
    });
    this.ctx.fillStyle = "black";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.points, this.canvas.width - 30, 30);
  }

  handleCollision(ball) {
    this.bricks.filter(b => b.health > 0).forEach(b => {
      if (b.hits(ball.pos)) {
        ball.vel.y *= -1;
        b.health -= 1;
        this.points++;
      }
    });
  }
}
