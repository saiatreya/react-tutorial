import React from 'react';
import Button from '../styled/Button';

const FunctionalComponent = (props) => {
    return (
        <div>
            <h1>Functional Components: </h1>
            <ul>
                <li>Functional components are used to be stateless components. But with the introduction of hooks functional components also have state.</li>
                <li>Functional components takes props parameter from another class/functional component.</li>
            </ul>
            <h2># Taking value from parent as props: </h2>
            <p>From parent <i>ClassComponent.js</i> we are passing name to functional component</p>
            <i>Name: </i>{props.name || 'No Name passed from parent'}
            <h2># Counter value from Parent: </h2>
            <i>Counter from parent: {props.counter}</i>
            <p>Click on the above <i>"Click to Increment Counter"</i> button to check Counter value incremented based on parent counter</p>
            <h2># Counter value incrementing from child: </h2>
            <p>Click on the below button to increment the counter in both child and parent at the same time. Here counter incrementing functionality has been passed as a props to child.</p>
            <Button onClick={props.counterCallBack}>Click to increment counter in both child and parent.</Button>
            <br /><br />
            <div className="file-name">Filename is >>>>> <strong>FunctionalComponent.js</strong></div>
        </div>
    );
};

export default FunctionalComponent;