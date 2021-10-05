

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_PROCESS':
            return { ...state, loading: true };
        case 'FETCH_USER_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case 'FETCH_USER_FAILURE':
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;