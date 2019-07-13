

export default class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        console.log(this.canvas);
        this.canvas.width = document.body.clientWidth; //document.width is obsolete
        this.canvas.height = document.body.clientHeight; //document.height is obsolete
        this.ctx = this.canvas.getContext("2d");
    }

    get width() {

        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}