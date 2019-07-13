
export const ZOOM_AMOUNT = 1.5;

export const ZOOM_RELATIVE_TO = 10;

export default class Camera {
    constructor({width, height}) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this._zoom = ZOOM_RELATIVE_TO;
    }

    get zoom() {
        return this._zoom / ZOOM_RELATIVE_TO;
    }

    set zoom(value) {
        this._zoom = value;
    }

    get actualX() {
        return this.x + this.width / 2 ;
    }

    get actualY() {
        return this.y + this.height / 2 ;
    }
}