import React, { useState, useContext } from 'react';
import Button from '../styled/Button';

const CounterContext = React.createContext(0);


const UseContextHook = () => {
    const { count, incrFn } = useContext(CounterContext);
    return (
        <div>
            <h4>Inside useContext consumer child</h4>
            <i>Counter in Child: </i> {count}
            <Button onClick={incrFn}>Increment Counter in Child</Button>
        </div>
    );
};

const IncrementCounterContextHook = () => {
    const [count, setCount] = useState(0);

    const incrFn = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>useContext</h1>
            <i>Counter: </i> {count}
            <Button onClick={incrFn}>Increment Counter</Button>
            <CounterContext.Provider value={{ count, incrFn }}>
                <UseContextHook />
            </CounterContext.Provider>
        </div>
    );
};

export default IncrementCounterContextHook;