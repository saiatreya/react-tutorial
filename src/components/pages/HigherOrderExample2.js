import React, { Component } from 'react';
import HighOrderFunction from './HigherOrderComponents';
import Button from '../styled/Button';

class HigherOrderExample2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Higher Order Component Example 2: </h1>
                <h4>Component 1: </h4>
                <Button onClick={this.props.incrementCount}>Increment</Button>
                <Button onClick={this.props.decrementCount}>Decrement</Button>
                <Button onClick={this.props.resetFn}>Reset</Button>
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</Button>
                <div><i>Counter: </i> {this.props.counter}</div>
                <div><i>Count: </i> {this.state.count}</div>
                <div>Name from props: {this.props.name}</div>
            </div>
        );
    }
}

export default HighOrderFunction(HigherOrderExample2, 5);