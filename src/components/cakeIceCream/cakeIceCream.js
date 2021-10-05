import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from './cakeIceCream.actions';
import Button from '../styled/Button';
import Users from '../Users/users';
const CakeIceCream = (props) => {
    const { cakes, iceCreams } = props;
    return (
        <div>
            Cakes: {cakes}
            <Button onClick={() => props.buyCake()}>Buy a Cake</Button><br />
            IceCreams: {iceCreams}
            <Button onClick={() => props.buyIceCream()}>Buy a IceCream</Button>
            <Users />
        </div>
    );
};

const mapStateToProps = (state) => {
    const { totalCakes, totalIceCreams } = state.cakeIceCreams;
    return {
        cakes: totalCakes,
        iceCreams: totalIceCreams
    }
}

export default connect(mapStateToProps, { buyCake, buyIceCream })(CakeIceCream);