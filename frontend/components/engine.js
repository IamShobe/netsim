import Mouse from "./mouse";
import Camera from "./camera";
import Circle from "./layers/renderable/circle";


class _Engine {
    constructor() {
        // meta objects initializations
        this.camera = new Camera(
            {
                width: this.width,
                height: this.height
            });
        this.mouse = new Mouse();

        // layers initializations
        this.layers = [];

        // objects to be rendered in the main screen.
        this.objects = [
            new Circle({x: this.width / 2, y: this.height / 2})
        ];
        this.connections = [];
    }

    registerLayer(layerName, layerObject, layerClass) {
        this.layers.push(new layerClass(layerObject));
    }

    get width() {
        return document.body.clientWidth;
    }

    get height() {
        return document.body.clientHeight;
    }

    draw() {
        for(const layer of this.layers) {
            layer.draw();
        }
    }
}

const Engine = new _Engine();
export default Engine;