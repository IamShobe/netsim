import Canvas from "./canvas";
import Text from "./renderable/text";
import Engine from "../engine";

export default class HUD extends Canvas {
    constructor(canvas) {
        super(canvas);

        this.camera_position = new Text({text: ""});
        this.mouse_position = new Text({text: ""});
        this.actual_mouse_position = new Text({text: ""});
        this.camera_zoom = new Text({text: ""});
    }

    draw() {
        super.draw();
        this.camera_position.text =
            `Camera: ${Engine.camera.x}, ${Engine.camera.y}`;
        this.camera_position.draw(this.ctx, 0, 0);

        this.camera_zoom.text =
            `Zoom: ${Engine.camera.zoom}`;
        this.camera_zoom.draw(this.ctx, 0, 20);

        this.mouse_position.text =
            `Mouse: ${Engine.mouse.x}, ${Engine.mouse.y}`;
        this.mouse_position.draw(this.ctx, 0, 40);

        this.actual_mouse_position.text =
            `Actual Mouse: ${Engine.mouse.actualX}, ${Engine.mouse.actualY}`;
        this.actual_mouse_position.draw(this.ctx, 0, 60);
    }
}