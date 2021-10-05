import React, { useEffect, useState } from 'react';

const useEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const clearInt = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return (() => {
            clearInterval(clearInt);
        });
    }, []);
    return (
        <div>
            <h1>Use Effect:</h1>
            <ul>
                <li>UseEffect can work as componentDidMount,componentDidUpdate and componentWillUnMount LifeCycle Method</li>
            </ul>
            <i>Counter: </i>{count}
        </div>
    );
};

export default useEffectHook;