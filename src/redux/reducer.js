

const initialState = {
    totalCakes: 10,
    totalIceCreams: 20
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return { ...state, totalCakes: state.totalCakes - 1 };
        case 'BUY_ICECREAM':
            return { ...state, totalIceCreams: state.totalIceCreams - 1 };
        default:
            return state;
    }
}

export default CakeReducer;