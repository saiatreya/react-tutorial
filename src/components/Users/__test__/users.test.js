import React from 'react';
import ReactDOM from 'react-dom';
import FunctionalComponent from '../../pages/FunctionalComponent';
import renderer from 'react-test-renderer';
describe("Simple test suite", () => {
    it("Test 1", () => {
        const div = document.createElement('DIV');
        ReactDOM.render(
            <FunctionalComponent />
            , div);
    });
    it("matches snapshot", () => {
        const tree = renderer.create(<FunctionalComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});