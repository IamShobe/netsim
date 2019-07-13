import RenderedObject from "./object";


export default class Circle extends RenderedObject {
    constructor({   x=0, y=0,
                    radius = 30, color = "green", strokeColor = '#003300',
                    lineWidth = 5
                }) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.strokeColor = strokeColor;
        this.color = color;
    }

    is_collides(x, y) {
        return Math.sqrt(Math.pow(x - this.actualX, 2) + Math.pow(y - this.actualY, 2)) < this.radius;
    }

    _draw(ctx, collides) {
        ctx.beginPath();
        ctx.arc(this.x, this.y,
            this.radius, 0, 2 * Math.PI,
            false);
        ctx.fillStyle = collides? this.color:"red";
        ctx.fill();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.stroke();
    }
}