//lets start by defining the several synchronous action types and action creators

//user can select a subreddit to display
export const FETCH_SUBREDDIT_START = 'FETCH_SUBREDDIT_START';
// user can press a 'refresh' button to update display
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
//network request to dispatch the posts for some subreddit
export const REQUEST_POSTS = 'REQUEST_POSTS';
//we get the network request
export const RECEIVE_POSTS = 'RECEIVE_POST';

//we also want to handle errors to dispatch an action on request failure
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const selectSubReddit = (subreddit) => {
    return {
        type: FETCH_SUBREDDIT_START,
        subreddit
    }
};

export const invalidateSubreddit = (subreddit) => {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
};

//this should be seperate from FETCH and REQUEST incase we need to fetch data independent of other actions
const requestPosts = (subreddit) => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
};

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






