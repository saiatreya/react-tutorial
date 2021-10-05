import { useHistory, useLocation, useParams, NavLink, Prompt } from 'react-router-dom';
import Button from '../styled/Button';
import React from 'react';
const RouterHooks = (props) => {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const [allow, setAllow] = React.useState(false);
    console.log('matchs in props', props.match.params);
    console.log(history, location, params);
    return (
        <div>
            <h1>Router Hooks: </h1>
            {params.id} - {location.state.surName}<br />
            <h4>Allow: {allow ? 'true' : 'false'}</h4>
            <Prompt when={!allow} message={() => 'Are you sure you want to go? '}></Prompt>
            <Button onClick={() => history.goBack()}>Go Back</Button>
            <Button onClick={() => setAllow(!allow)}>Allow to go Back</Button>
            <h4># Nested Routes</h4>
            <NavLink to={'/router-hook/' + params.id + '/Atreyapurapu'}>Family Name</NavLink>
            <Button onClick={() => history.push('/ref')}>Programmatic Navigation</Button>
        </div>
    );
};

export default RouterHooks;