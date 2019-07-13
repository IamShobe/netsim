import React from "react";

import Camera from "./components/camera";


import "./style.scss";
import Engine from "./components/engine";
import Main from "./components/layers/main";
import HUD from "./components/layers/hud";


class App extends React.Component {
    state = {
        test: "test"
    };

    constructor(props) {
        super(props);
        this.layer1 = React.createRef();
        this.layer2 = React.createRef();
        this.layer3 = React.createRef();

        this.container = React.createRef();
    }

    draw = () => {
        Engine.draw();
        window.requestAnimationFrame(this.draw);
    };

    bindEvents = () => {
        this.container.current.addEventListener('mousemove', e => {
            Engine.mouse.moveUpdate(e);
        });
        this.container.current.addEventListener('mousedown', e => {
            Engine.mouse.mousedownUpdate(e);
        });
        this.container.current.addEventListener('mouseup', e => {
            Engine.mouse.mouseupUpdate(e);
        });
        // this.container.current.addEventListener('wheel', e => {
        //     this.engine.mouse.wheelUpdate(e);
        // });
    };

    componentDidMount() {
        Engine.registerLayer("main", this.layer2.current, Main);
        Engine.registerLayer("hud", this.layer3.current, HUD);

        this.bindEvents();

        window.requestAnimationFrame(this.draw);
    }

    render() {
        return (
            <div ref={this.container} className="container">
                <canvas ref={this.layer1} id="layer1"/>
                <canvas ref={this.layer2} id="layer2"/>
                <canvas ref={this.layer3} id="layer3"/>
            </div>
        );
    }
}


export default App;