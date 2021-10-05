import React from 'react';
import Button from '../styled/Button';

const CounterContextRef = React.createContext(0);

const CounterConsumer = (props) => {
    return (
        <div>
            <CounterContextRef.Consumer>
                {(val) => (
                    <div>
                        <h1>Count: {val.counter}</h1>
                        <h4>Below button is in child and is to call the increment counter function in parent. The function is passed using Context API</h4>
                        <Button onClick={val.incFn}>Button in Child</Button>
                    </div>
                )}
            </CounterContextRef.Consumer>
        </div>
    );
};

class CounterContext extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    incrementByFive = () => {
        this.setState({
            counter: this.state.counter + 5
        });
    }
    render() {
        return (
            <div>
                <h1>React Context</h1>
                <p>Incrementing the counter in child elements using context API</p>
                <div>Button is in parent and child element count is incremented using context API</div>
                <br /><Button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increase Counter</Button>
                <CounterContextRef.Provider value={{ counter: this.state.counter, incFn: this.incrementByFive }}>
                    <CounterConsumer />
                </CounterContextRef.Provider>
            </div>
        );
    }
}



export default CounterContext;