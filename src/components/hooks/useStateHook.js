import React, { useState } from 'react';
import Button from '../styled/Button';

const useStateHook = () => {
    const [counter, setCount] = useState(0);
    const [fullName, setName] = useState({ firstName: 'sai', lastName: 'kumar' });
    const [items, addItem] = useState([]);
    const incrementFn = () => {
        setCount((prevCounter) => prevCounter + 5);
    }
    return (
        <div>
            <h1>Use State Hook: </h1>
            <p>Setting state in functional component using useState hook.</p>
            <i>Counter: </i>{counter}
            <br />
            <Button onClick={() => setCount(counter + 1)}>Increment Counter</Button>
            <h4># Updating state counter based on previous counter value:</h4>
            <Button onClick={incrementFn}>Increment 5 times</Button>
            <h4># useState for objects:</h4>
            <label>First Name: {fullName.firstName}</label><br />
            <label>Last Name: {fullName.lastName}</label><br />
            First Name: <input type="text" value={fullName.firstName} onChange={(e) => setName({ ...fullName, firstName: e.target.value })} />
            Last Name: <input type="text" value={fullName.lastName} onChange={(e) => setName({ ...fullName, lastName: e.target.value })} />
            <h4># useState for Array:</h4>
            <Button onClick={() => addItem([...items, items.length])}>Add New Item</Button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default useStateHook;