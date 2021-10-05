import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './users.actions';
import Button from '../styled/Button';
import { buyCake, buyIceCream } from '../cakeIceCream/cakeIceCream.actions';
const Users = (props) => {
    const { loading, data, error } = props.users;
    const { totalCakes, totalIceCreams } = useSelector((state) => state.cakeIceCreams);
    const dispatch = useDispatch();
    React.useEffect(() => {
        props.fetchPosts();
    }, []);
    return (
        <div>
            Cakes: {totalCakes} | IceCreams: {totalIceCreams}
            <Button onClick={() => dispatch(buyIceCream())}>Buy a IceCream</Button>
            <Button onClick={() => dispatch(buyCake())}>Buy a Cake</Button><br />
            <ul>
                {loading ? 'Loading....' : (
                    error ? error : (
                        data && data.map(user => (
                            <li key={user.id}>{user.title}</li>
                        ))
                    )
                )}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.userData
    }
}

export default connect(mapStateToProps, { fetchPosts })(Users);