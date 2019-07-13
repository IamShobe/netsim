import RenderAble from "./renderable";
import Engine from "../../engine";


export default class RenderedObject extends RenderAble {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
    }

    get x() {
        return this.actualX - Engine.camera.x;
    }

    set x(value) {
        this.actualX = value;
    }

    get y() {
        return this.actualY - Engine.camera.y;
    }

    set y(value) {
        this.actualY = value;
    }

    is_collides(x, y) {

    }

    draw(ctx, collides) {
        ctx.save();
        this._draw(...arguments);
        ctx.restore();
    }
}