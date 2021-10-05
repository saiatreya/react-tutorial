import React, { Component } from 'react';
import Button from '../styled/Button';

class RenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }
    reset = () => {
        this.setState({
            counter: 0
        });
    }
    render() {
        return (
            this.props.render(this.incrementCounter, this.decrementCounter, this.reset, this.state, this.props)
        );
    }
}

class CounterFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Render Props Pattern: </h1>
                <h4>Counter Function 1: </h4>
                <Button onClick={this.props.incFn}>Increment</Button>
                <Button onClick={this.props.decFn}>Decrement</Button>
                <Button onClick={this.props.resetFn}>Reset</Button><br />
                <i>Counter: </i> {this.props.counter}<br />
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment Count</Button><i>Count: </i> {this.state.count}
            </div>
        );
    }
}

class CounterFunction2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h4>{this.props.header}</h4>
                <Button onClick={this.props.incFn}>Increment</Button>
                <Button onClick={this.props.decFn}>Decrement</Button>
                <Button onClick={this.props.resetFn}>Reset</Button><br />
                <i>Counter: </i> {this.props.counter}<br />
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment Count</Button><i>Count: </i> {this.state.count}
            </div>
        );
    }
}

class RenderPropsComponent extends Component {
    render() {
        return (
            <div>
                <RenderProps render={(incFn, decFn, resetFn, state, props) => {
                    return (
                        <div>
                            <CounterFunction incFn={incFn} decFn={decFn} resetFn={resetFn} {...state} {...props} />
                            <CounterFunction2 header="Two Siblings Count chaning parallely inside Same Render Props: " incFn={incFn} decFn={decFn} resetFn={resetFn} {...state} {...props} />
                        </div>
                    )
                }} />
                <RenderProps render={(incFn, decFn, resetFn, state, props) => {
                    return (
                        <div>
                            <CounterFunction2 header="Render Props for other component: " incFn={incFn} decFn={decFn} resetFn={resetFn} {...state} {...props} />
                        </div>
                    )
                }} />
            </div>
        );
    }
}

export default RenderPropsComponent;

