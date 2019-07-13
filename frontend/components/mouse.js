import Engine from "./engine";

export const Buttons = Object.freeze({
    NO_BUTTON: 0,
    PRIMARY: 1,
    SECONDARY: 2,
    MIDDLE: 3
});

export default class Mouse {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.buttons = Buttons.NO_BUTTON;
        this.pivotPointX = undefined;
        this.pivotPointY = undefined;

        this.draggingAllowed = false;
        this.isDraggingDelay = 10;  // in ms
        this.isDraggingTimer = undefined;
    }

    get isDragging() {
        return this.buttons & Buttons.PRIMARY && this.draggingAllowed;
    }

    get actualX() {
        return this.x + Engine.camera.x;
    }

    get actualY() {
        return this.y + Engine.camera.y;
    }

    // wheelUpdate(event) {
    //     this.pivotPointX = this.actualX;
    //     this.pivotPointY = this.actualY;
    //     Engine.camera.x =
    //         (this.pivotPointX)/ Engine.camera.zoom;
    //     Engine.camera.y =
    //         (this.pivotPointY ) / Engine.camera.zoom;
    //
    //     console.log(this.pivotPointX, this.pivotPointY);
    //
    //
    //     Engine.camera.zoom =
    //         Engine.camera._zoom - Math.sign(event.deltaY);
    //
    //
    //     console.log(Engine.camera.zoom);
    // }

    moveUpdate(event) {
        this.x = event.clientX;
        this.y = event.clientY;
        this.buttons = event.buttons;

        if (this.isDragging) {
            Engine.camera.x -= event.movementX;
            Engine.camera.y -= event.movementY;
        }
    }

    mousedownUpdate(event) {
        this.buttons = event.buttons;

        if ((this.buttons & Buttons.PRIMARY) && this.isDraggingTimer === undefined) {
            this.isDraggingTimer = setTimeout(() => {
                this.draggingAllowed = true;
            }, this.isDraggingDelay);
        }
    }

    mouseupUpdate(event) {
        this.buttons = event.buttons;
        if (!(this.buttons & Buttons.PRIMARY)) {
            if (this.isDraggingTimer !== undefined) {
                clearTimeout(this.isDraggingTimer);
                this.isDraggingTimer = undefined;
            }
            this.draggingAllowed = false;
        }
    }
}