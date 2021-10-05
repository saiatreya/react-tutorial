import React, { PureComponent } from 'react';
import Button from '../styled/Button';

const ChildMemo = React.memo((props) => {
    console.log('Inside child Memo rendering');
    return (
        <div>Child Name: {props.name}</div>
    )
});


class Memo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Niranjan',
            age: 27
        }
    }
    render() {
        console.log('Parent re-rendering');
        return (
            <div>
                <h1>Memo in Child:</h1>
                <p>If Parent state gets updated which is not dependant on the props passed to child, inorder to stop the re-rendering of the child we need to pass <strong>Memo</strong>.</p>
                <div>In the below example, on changing age in parent which is not passed as a prop to child will re-render the child as well if <strong>Memo</strong> is not used on child.</div>
                <br />Name: {this.state.name} - age: {this.state.age}<br />
                <Button onClick={() => this.setState({ name: 'Niranjan' })}>Change Name</Button>
                &nbsp;-&nbsp;<Button onClick={() => this.setState({ age: 28 })}>Change Age</Button>
                <br /><br /><ChildMemo name="Niranjan" />
                <br /><br />
                <div className="file-name">Filename is >>>>> <strong>Memo.js</strong></div>
            </div>
        );
    }
}

export default Memo;