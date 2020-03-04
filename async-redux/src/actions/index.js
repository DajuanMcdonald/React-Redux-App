import fetch from 'cross-fetch';

//lets start by defining the several synchronous action types and action creators

//we also want to handle errors to dispatch an action on request failure
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

//user can select a subreddit to display
export const FETCH_SUBREDDIT_START = 'FETCH_SUBREDDIT_START';
export const selectSubReddit = (subreddit) => {
    return {
        type: FETCH_SUBREDDIT_START,
        subreddit
    }
};

// user can press a 'refresh' button to update display
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const invalidateSubreddit = (subreddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
};

//network request to dispatch the posts for some subreddit
export const REQUEST_POSTS = 'REQUEST_POSTS';
//this should be seperate from FETCH and REQUEST incase we need to fetch data independent of other actions
const requestPosts = (subreddit) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
};

//we get the network request
export const RECEIVE_POSTS = 'RECEIVE_POST';
const receivePosts = (subreddit) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()

    }
};

const handleError = (subreddit) => {
    return {
        type: RECEIVE_ERROR,
        subreddit,

    }
};






