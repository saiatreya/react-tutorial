import { createStore, combineReducers, applyMiddleware } from 'redux';
import CakeReducer from './reducer';
import UserReducer from './UserReducer';
import thunk from 'redux-thunk';
const rootReducers = combineReducers({
    cakeIceCreams: CakeReducer,
    userData: UserReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;