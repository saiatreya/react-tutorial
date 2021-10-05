import React, { Component } from 'react';

const HighOrderFunction = (WrapperComponent, increOrDecValue = 1) => {
    class EnhancedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0
            };
        }
        incrementCounter = () => {
            this.setState({
                counter: this.state.counter + increOrDecValue
            });
        }
        decrementCounter = () => {
            this.setState({
                counter: this.state.counter - increOrDecValue
            });
        }
        reset = () => {
            this.setState({
                counter: 0
            });
        }
        render() {
            return (
                <WrapperComponent
                    {...this.state}
                    {...this.props}
                    incrementCount={this.incrementCounter}
                    decrementCount={this.decrementCounter}
                    resetFn={this.reset}
                />
            );
        }
    }
    return EnhancedComponent;
}

export default HighOrderFunction;