import { combineReducers } from 'redux';
import './user/user.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});