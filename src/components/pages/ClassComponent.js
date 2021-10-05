import React from 'react';
import Button from '../styled/Button';
import FunctionalComponent from './FunctionalComponent';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            counter5Times: 0,
            timer: 0
        }
    }

    componentDidMount() {
        this.timerInterval = setInterval(() => {
            this.setState((prevState) => {
                return { timer: prevState.timer + 1 };
            })
        }, 1000);
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter5Times: this.state.counter * 5
            });
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Class Components: </h1>
                <ul>
                    <li>Class components have state,life cycle hooks and can pass state as props to child components/functions</li>
                    <li>State can be set using <strong>setState()</strong> method</li>
                    <li>Whenever there is a change in the state, DOM will re-render</li>
                    <li>Class components takes props parameter from another class/functional component</li>
                </ul>
                <h2># Change in State on button click: </h2>
                <div><i>Counter:</i> {this.state.counter}</div><br />
                <Button onClick={this.incrementCounter}>Click to Increment Counter</Button>
                <h2># Changing Counter2 depending on Counter Value: </h2>
                <ul>
                    <li>
                        Changing counter2 value 5 times the current counter value using setState callback.
                    </li>
                    <li>Click on the above button which changes the Counter value based on which counter2 will be updated by 5 times the value of counter</li>
                </ul>
                <div><i>Counter2:</i> {this.state.counter5Times}</div>
                <br />
                <h2># Timer using setState Method and previous State: </h2>
                <p>Timer value change based on the previous state</p>
                <i>Timer:</i> {this.state.timer}
                <br /><br />
                <h2># Functional component as a child: </h2>
                <p>We can include functional/class component as a child to another class/functional component. Below <i>Functional Component (FunctionalComponent.js)</i> is used as child in this component</p>
                <div className="file-name">Filename is >>>>> <strong>ClassComponent.js</strong></div>
                <FunctionalComponent name="React Tutorials By Niranjan" counter={this.state.counter} counterCallBack={this.incrementCounter} />
            </React.Fragment>
        )
    }
}

export default ClassComponent;