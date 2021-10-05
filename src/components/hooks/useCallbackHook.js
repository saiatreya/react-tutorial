import React, { Component } from 'react';
import Button from '../styled/Button';

const UseCallbackHook = React.memo((props) => {
    console.log('Inside Memo Child');
    return (
        <div>
            <p>Increment Counter value in parent from child using parent increment function:</p>
            <Button onClick={props.incFn}>Increment Parent counter</Button>
        </div>
    );
});

const useCallbackHookComponent = () => {
    const [count, setCount] = React.useState(0);
    const [age, setAge] = React.useState(26);
    const incrementFn = React.useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const incrageFn = () => {
        setAge(age + 1);
    };
    console.log('Inside Parent');
    return (
        <div>
            <h1>useCallback:</h1>
            <h4>Counter: {count}</h4>
            <Button onClick={incrementFn}>Increment Counter</Button>
            <h4>age: {age}</h4>
            <Button onClick={incrageFn}>Increment Age</Button>
            <UseCallbackHook incFn={incrementFn} />
        </div>
    );
}

export default useCallbackHookComponent;