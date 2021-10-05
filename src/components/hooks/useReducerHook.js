import React, { useReducer } from 'react';
import Button from '../styled/Button';

const initialValue = {
    counter: 0,
    firstName: 'Niranjan',
    lastName: 'Atreyapurapu'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        case 'RESET':
            return { ...state, counter: 0 };
        case 'FIRSTNAME':
            return { ...state, firstName: action.value }
        case 'LASTNAME':
            return { ...state, lastName: action.value }
        default:
            return state;
    }
}

const useReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <div>
            <h1>useReducer: </h1>
            <Button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment Counter</Button>
            <Button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement Counter</Button>
            <Button onClick={() => dispatch({ type: 'RESET' })}>Reset Counter</Button><br />
            FIRSTNAME: <input type="text" value={state.firstName} onChange={(e) => dispatch({ type: 'FIRSTNAME', value: e.target.value })} />
            LASTNAME: <input type="text" value={state.lastName} onChange={(e) => dispatch({ type: 'LASTNAME', value: e.target.value })} />
            <br /><i>Counter: </i> {state.counter}<br />
            <i>FIRSTNAME: </i> {state.firstName}<br />
            <i>LASTNAME: </i> {state.lastName}<br />
        </div>
    );
};

export default useReducerHook;