import React from 'react';
import Button from '../styled/Button';

const CustomCounterHook = (initialValue = 1) => {
    let [counter, setCount] = React.useState(initialValue);

    const incrementFn = () => {
        setCount(counter + initialValue);
    }
    const reset = () => {
        setCount(0);
    }
    const decrementFn = () => {
        setCount(counter - initialValue);
    }
    return [counter, incrementFn, decrementFn, reset];
};

const Counter2 = () => {
    const [count, incFn, deFn, resetFn] = CustomCounterHook(5);
    return (
        <div>
            <h4># Counter 2: </h4>
            Counter: {count}
            <Button onClick={incFn}>Increment</Button>
            <Button onClick={deFn}>Decrement</Button>
            <Button onClick={resetFn}>Reset</Button>
        </div>
    );
};

const Counter1 = () => {
    const [count, incFn, deFn, resetFn] = CustomCounterHook();
    return (
        <div>
            <h1>Custom Hook:</h1>
            <h4># Counter 1: </h4>
            Counter: {count}
            <Button onClick={incFn}>Increment</Button>
            <Button onClick={deFn}>Decrement</Button>
            <Button onClick={resetFn}>Reset</Button>
            <Counter2 />
        </div>
    );
};

export default Counter1;


