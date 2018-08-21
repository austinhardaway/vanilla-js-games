import { Vec } from "./Structs.js";

export default class Snake {
  constructor(canvas, ctx, pos = new Vec(100, 100), vel = new Vec(0, 0)) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pos = pos;
    this.vel = vel;
    this.h = 15;
    this.w = 15;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.pos.x, this.pos.y, this.h, this.w);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
