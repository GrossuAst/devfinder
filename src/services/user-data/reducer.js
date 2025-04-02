import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED } from "./action";

const initialState = {
    user: {
        name: null,
        login: null,
        html_url: null,
        avatar_url: null,
        created_at: null,
        bio: null,
        public_repos: null,
        followers: null,
        following: null,
        location: null,
        twitter_username: null,
        blog: null,
        company: null,
    },
    feedRequest: false,
    feedFailed: false,
    isLoading: false,
    error: null,
};

export const userDataReducer = (state = initialState, action) => {
    const data = action.payload;
    switch(action.type) {
        case GET_USER_DATA: 
            return {
                user: initialState.user,
                feedRequest: true,
                feedFailed: false,
                isLoading: true,
                error: null,
            };
        case GET_USER_DATA_SUCCESS: 
            return {
                ...state,
                feedRequest: false,
                feedFailed: false,
                isLoading: false,
                error: null,
                user: {
                    name: data.name,
                    login: data.login,
                    html_url: data.html_url,
                    avatar_url: data.avatar_url,
                    created_at: data.created_at,
                    bio: data.bio,
                    public_repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    location: data.location,
                    twitter_username: data.twitter_username,
                    blog: data.blog,
                    company: data.company
                }
            };
        case GET_USER_DATA_FAILED: 
            return {
                ...state,
                feedRequest: false,
                feedFailed: true,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    };
};