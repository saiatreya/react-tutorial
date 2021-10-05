import React, { Component } from 'react';
import Button from '../styled/Button';

class LifeCycleHooks extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Niranjan'
        }
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', props, state);
        return null;
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ShouldComponentUpdate', nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return { ...prevState };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    triggerError() {
        throw new Error('Custom Error From Life Cycle hooks');
    }

    render() {
        console.log('Render Method');
        if (this.state.name === 'Sai') {
            this.triggerError();
        }
        return (
            <div>
                <h1>Life Cycle Methods Exection:</h1>
                <div>Check in console for life cycle execution steps</div>
                Name: {this.state.name}<br />
                <Button onClick={() => this.setState({ name: 'Sai Kumar' })}>Update state to check component updating phase</Button>
                <br /><br />
                <Button onClick={() => this.setState({ name: 'Sai' })}>Trigger Error to execute Error Life Cycle</Button>
                <br /><i>Error wont be triggered for event handlers</i>
                <br /><br /><div className="file-name">Filename is >>>>> <strong>LifeCycleHooks.js</strong></div>
            </div>
        );
    }
}

export default LifeCycleHooks;