import React from 'react';
import Button from '../styled/Button';


const Parent = () => {
    const inputRef = React.useRef();
    const referencVal = () => {
        inputRef.current.focus();
    }
    const blurInput = () => {
        inputRef.current.blur();
    }
    return (
        <div>
            <Child ref={inputRef} />
            <Button onClick={referencVal}>Get Reference Value in Console (Focusing Input)</Button>
            <Button onClick={blurInput}>Blur Input</Button>
        </div>
    );
};


const Child = React.forwardRef((props, ref) => {
    const inputRef = React.useRef();
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('Imperative element = ', ref, ', original element = ', inputRef);
            inputRef.current.focus();
        },
        blur: () => {
            inputRef.current.blur();
        }
    }));
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
});

const useImperativeHandleHook = () => {
    return (
        <div>
            <h1>useImperativeHandle: </h1>
            <p>Imperative handle should be used with forwardRef and is used to expose the few properties of element to parent</p>
            <Parent />
        </div>
    );
};

export default useImperativeHandleHook;