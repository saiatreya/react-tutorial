import React, { PureComponent } from 'react';
import Button from '../styled/Button';

class PureComponents extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'Niranjan'
        }
    }
    render() {
        console.log('Component re rendered');
        return (
            <div>
                <h1>Pure Components</h1>
                <p>Component will rerender the dom whenever we set the state. But pure components will do shallow comparision of the state and then re renders the dom. </p>
                Name: {this.state.name}
                <Button onClick={() => this.setState({ name: 'Niranjan' })}>Name remains Same</Button>
                <br /><br />
                <div className="file-name">Filename is >>>>> <strong>PureComponent.js</strong></div>
            </div>
        );
    }
}

export default PureComponents;