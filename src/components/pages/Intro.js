import React from 'react';

const Intro = () => {
    const dependencies = [{
        name: 'axios',
        description: 'For API calls'
    }, {
        name: 'react-router-dom',
        description: 'For Navigating to different pages'
    }, {
        name: 'react-redux',
        description: 'To use store for entire application'
    }, {
        name: 'redux',
        description: 'For application state management'
    }, {
        name: 'redux-thunk',
        description: 'Async calls'
    }, {
        name: 'styled-components',
        description: 'To custom style the components'
    }, {
        name: 'flow-bin',
        description: 'For application type checking'
    }];
    return (
        <React.Fragment>
            <h1>Introduction:</h1>
            <p>This tutorial is about <strong>React - javascript libarary</strong>.
                Each and every concept is explained with an example file.</p>
            <br />
            <h1>Installation:</h1>
            <p>Please install below dependencies</p>
            <ul>
                {dependencies.map((dependency, index) => (
                    <li key={index}><strong>{dependency.name}</strong>{' - ' + dependency.description}</li>
                ))}
            </ul>
            <div className="file-name">Filename is >>>>> <strong>Intro.js</strong></div>
        </React.Fragment>
    )
}

export default Intro;