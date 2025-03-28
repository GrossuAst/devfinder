import { combineReducers } from 'redux';
import { userDataReducer } from './user-data/reducer';
import { appOptionsReducer } from './app-options/reducer';

export const rootReducer = combineReducers({
    user: userDataReducer,
    options: appOptionsReducer
});