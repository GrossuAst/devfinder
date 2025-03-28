import { SWITCH_THEME } from "./action";

const initialState = {
    theme: 'dark'
};

export const appOptionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SWITCH_THEME: 
            return {
                ...state,
                theme: state.theme === 'dark' ? 'light' : 'dark'
            };
        default: 
            return state;
    }
};