import React from 'react';
import Button from '../styled/Button';

const useMemoHook = () => {
    const [count, setCount] = React.useState(0);
    const [counter, setCounter] = React.useState(0);
    const incrementFn = () => {
        setCount(count + 1);
    }
    const incrementCounter = () => {
        setCounter(counter + 1);
    }
    const isEven = React.useMemo(() => {
        for (let i = 0; i < 1000000000; i++) {

        }
        return count % 2 === 0;
    }, [count]);
    return (
        <div>
            <h1>useMemoHook:</h1>
            <h4>{isEven ? 'Even' : 'Odd'}</h4>
            <i>Count:</i> {count}<br />
            <i>Counter:</i> {counter}<br />
            <Button onClick={incrementFn}>Increment Count</Button>
            <Button onClick={incrementCounter}>Increment Counter</Button>
        </div>
    );
};

export default useMemoHook;