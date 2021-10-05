import React from 'react';
import Button from '../styled/Button';

const useRefHook = () => {
    const btnRef = React.useRef();
    const intRef = React.useRef();
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        intRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }, [])
    const checkRef = () => {
        console.log(btnRef.current);
    }
    return (
        <div>
            <h1>useRef:</h1>
            <i>Counter:</i>{count}<br />
            <Button ref={btnRef} onClick={checkRef}>Reference Check</Button>
            <Button onClick={() => clearInterval(intRef.current)}>Reset Interval</Button>
        </div>
    );
};

export default useRefHook;