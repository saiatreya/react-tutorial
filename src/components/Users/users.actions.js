
import axios from 'axios';

const fetchProgress = () => {
    return {
        type: 'FETCH_USER_PROCESS'
    }
}

const fetchSuccess = (data) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: data
    }
}

const fetchError = () => {
    return {
        type: 'FETCH_USER_FAILURE',
        payload: 'Something Went Wrong !!!'
    }
}

const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchProgress());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                dispatch(fetchSuccess(res.data));
            }).catch(() => {
                dispatch(fetchError());
            })
    }
}

export { fetchPosts };