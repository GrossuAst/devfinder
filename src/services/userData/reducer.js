import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED } from "./action";

const initialState = {
    user: {
        name: 'The Octocat',
    },
    feedRequest: false,
    feedFailed: false,
};

export const userDataReducer = (state = initialState, action) => {
    const data = action.payload;
    switch(action.type) {
        case GET_USER_DATA: 
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            };
        case GET_USER_DATA_SUCCESS: 
            return {
                ...state,
                feedRequest: false,
                feedFailed: false,
                user: {
                    name: data.name
                }
            };
        case GET_USER_DATA_FAILED: 
            return {
                ...state,
                feedRequest: false,
                feedFailed: true
            };
        default:
            return state;
    };
};