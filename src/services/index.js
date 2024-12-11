import { combineReducers } from 'redux';
import { userDataReducer } from './userData/reducer';

export const rootReducer = combineReducers({
    user: userDataReducer
});