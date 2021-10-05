import React from 'react';

const parentStyles = {
    position: 'absolute',
    top: '150px',
    left: '50px',
    backgroundColor: 'red',
    width: '200px',
    height: '200px'
}

const childStyles = {
    position: 'relative',
    backgroundColor: 'blue',
    width: '50px',
    height: '50px'
}

const Child = ({ parRef }) => {
    const childRef = React.useRef();
    React.useLayoutEffect(() => {
        const bottom = parRef.current.getBoundingClientRect().bottom;
        childRef.current.style.top = bottom + 'px';
    }, []);
    return (
        <div ref={childRef} style={childStyles}>
            Child1
        </div>
    );
};

const Child2 = ({ parRef }) => {
    const childRef = React.useRef();
    React.useEffect(() => {
        const bottom = parRef.current.getBoundingClientRect().bottom;
        childRef.current.style.top = bottom + 'px';
        childRef.current.style.left = '60px';
    }, []);
    return (
        <div ref={childRef} style={childStyles}>
            Child2
        </div>
    );
};


const useLayoutEffectHook = () => {
    const [show, setShow] = React.useState(false);
    const parentRef = React.useRef();
    return (
        <div>
            <h1>useLayoutEffect:</h1>
            <p>This is called whenever DOM mutation completes.Use this to read
                 the layout from the DOM. If useEffect is called in this case, it will result in flickering of elements (For Child2)</p>
            <div ref={parentRef} style={parentStyles} onClick={() => setShow(!show)}>
                Parent
            {show && (
                    <React.Fragment>
                        <Child parRef={parentRef} />
                        <Child2 parRef={parentRef} />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default useLayoutEffectHook;