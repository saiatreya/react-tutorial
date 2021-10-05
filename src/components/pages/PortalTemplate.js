import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PortalTemp = () => {
    return ReactDOM.createPortal(
        <div className="modal">
            <h1>Inside portal</h1>
        </div>
        , document.getElementById('modal'));
};

class PortalTemplate extends Component {
    render() {
        return (
            <div>
                <h1>Using Portal: </h1>
                <p>Portal is used to add models/tooltips which are part of the body.</p>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <div>This is an example to check the document</div>
                <PortalTemp />
            </div>
        );
    }
}

export default PortalTemplate;