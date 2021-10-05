import React, { Component } from 'react';
import Button from '../styled/Button';


const ReferenceForward = React.forwardRef((props, ref) => {
    return (
        <Button ref={ref} onClick={props.trigger}>{props.buttonName}</Button>
    )
});

const CounterInput = React.forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref} />
    )
});

class ForwardReference extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.inputRef = React.createRef();
        this.btnRef = React.createRef();
    }
    trigger = () => {
        this.btnRef.current.innerText = 'Forwarded reference Toggled';
    }

    incrementCounter = () => {
        this.setState({
            counter: this.inputRef.current.value ? (+this.inputRef.current.value + this.state.counter) : this.state.counter + 1
        });
    }
    render() {
        return (
            <div>
                <h1>Using ForwardRef:</h1>
                <p>Reference is getting forwarded from child to parent.</p>
                <ReferenceForward ref={this.btnRef} trigger={this.trigger} buttonName="Forward Referece Triggered" />
                <h2># Incrementing counter based on input value in child:</h2>
                <CounterInput ref={this.inputRef} />
                <div><i>Counter: </i>{this.state.counter}</div>
                <br />
                <Button onClick={this.incrementCounter}>Increment Counter based on child input value</Button>
                <Button onClick={() => this.setState({ counter: 0 })}>Reset</Button>
                <br /><br />
                <div className="file-name">Filename is >>>>> <strong>ForwardReference.js</strong></div>
            </div>
        );
    }
}

export default ForwardReference;