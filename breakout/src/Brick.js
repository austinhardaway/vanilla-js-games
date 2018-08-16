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

    draw() {
        if (this.health > 0) {
            this.ctx.beginPath();
            this.ctx.rect(this.x, this.y, this.w, this.h);
            this.ctx.fillStyle = "red";
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
}