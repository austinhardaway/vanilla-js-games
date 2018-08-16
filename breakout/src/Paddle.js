export default class Paddle {
    constructor(canvas, ctx, h = 10, w = 75) {
        this.h = h;
        this.w = w;
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = (this.canvas.width - this.w);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.canvas.height - this.h, this.w, this.h);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    update(right, left) {
        if (right && this.x < this.canvas.width - this.w) {
            this.x += 7;
        } else if (left && this.x > 0) {
            this.x -= 7;
        }
    }
}