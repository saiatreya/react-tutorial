import React, { Component } from 'react';
import Button from '../styled/Button';

class Reference extends Component {

    constructor() {
        super();
        this.buttonRef = React.createRef();
        this.cbRef = null;
        this.callbackRef = (element) => {
            this.cbRef = element;
        }
    }
    toggle = () => {
        this.buttonRef.current.innerText = 'Toggled';
    }

    toggleCallback = () => {
        this.cbRef.innerText = 'Callback Toggled';
    }

    render() {
        return (
            <div>
                <h1>Using ref:</h1>
                <p>Using ref to control the DOM elements</p>
                <Button ref={this.buttonRef} onClick={this.toggle}>Toggle Button</Button>
                <Button ref={this.callbackRef} onClick={this.toggleCallback}>Toggle Callback</Button>
                <br /><br />
                <div className="file-name">Filename is >>>>> <strong>Reference.js</strong></div>
            </div>
        );
    }
}

export default Reference;