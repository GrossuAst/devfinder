import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED } from "./action";

const initialState = {
    user: {
        name: 'The Octocat',
        login: 'octocat',
        html_url: "https://github.com/octocat",
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        created_at: '25 Jan 2011',
        bio: 'This profile has o bio',
        public_repos: 8,
        followers: 5276,
        following: 9,
        location: 'San Francisco',
        twitter_username: 'Not Available',
        blog: 'https://github.blog',
        company: 'github'
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