

export default class RenderAble {

    draw(ctx) {
        ctx.save();
        this._draw(...arguments);
        ctx.restore();
    }

    _draw(ctx) {

    }
}