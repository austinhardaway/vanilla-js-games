import {
    Vec
} from "./Structs.js"

export default class Ball {
    constructor(canvas, ctx, pos = new Vec(canvas.width / 2, canvas.height / 2), r = 10,
        vel = new Vec(-2, 2)) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.pos = pos;
        this.r = r;
        this.vel = vel;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    bounce(paddle, bricks) {
        if (this.pos.x + this.vel.x > this.canvas.width - this.r || this.pos.x + this.vel.x < this.r) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y + this.vel.y < this.r) {
            this.vel.y = -this.vel.y;
        } else if (this.pos.y + this.vel.y > this.canvas.height - this.r) {
            if (this.pos.x > paddle.x && this.pos.x < paddle.x + paddle.w) {
                this.vel.y = -this.vel.y;
            } else {
                alert("GAME OVER");
                document.location.reload();
            }
        }
        bricks.filter(elem => elem.health > 0).forEach(elem => {
            if (this.pos.x > elem.x && this.pos.x < elem.x + elem.w && this.pos.y > elem.y && this.pos.y < elem.y + elem.h) {
                this.vel.y = -this.vel.y;
                elem.health -= 1;
                console.log(elem.health)
            }
        });

    }

}