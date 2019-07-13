import Canvas from "./canvas";
import Engine from "../engine";


export default class Main extends Canvas {


    draw() {
        super.draw();
        this.ctx.save();
        this.ctx.translate(Engine.camera.pivotPointX, Engine.camera.pivotPointY);
        this.ctx.scale(Engine.camera.zoom, Engine.camera.zoom);
        this.ctx.translate(-Engine.camera.pivotPointX, -Engine.camera.pivotPointY);
        for (const obj of Engine.objects) {
            const collides = obj.is_collides(Engine.mouse.actualX,
                Engine.mouse.actualY);
            obj.draw(this.ctx, collides);
        }
        this.ctx.restore();

    }
}