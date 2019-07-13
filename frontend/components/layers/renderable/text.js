import RenderAble from "./renderable";
import {Align, TextBaseLine} from "./utils";


export default class Text extends RenderAble {
    constructor({
                    text, size = "20px", font = "Arial", color = "black",
                    align = Align.LEFT, textBaseline = TextBaseLine.TOP
                }) {
        super();
        this.text = text;
        this.font = font;
        this.size = size;
        this.align = align;
        this.color = color;
        this.textBaseline = textBaseline;
    }

    _draw(ctx, x, y) {
        ctx.font = `${this.size} ${this.font}`;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = this.textBaseline;
        ctx.fillText(this.text, x, y);
    }
}