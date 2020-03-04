import { combineReducers } from "redux";

import {
    FETCH_SUBREDDIT_START,
    RECEIVE_ERROR,
    RECEIVE_POSTS,
    REQUEST_POSTS,
    INVALIDATE_SUBREDDIT
} from '../actions/actions';

const selectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case FETCH_SUBREDDIT_START:
            return action.subreddit;
        default:
            return state;
    }
};

const posts = (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        default:
            return state
    }
};

const postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                //use ES6 computed property syntax to update in a concise way
                //and extract posts(state, action) that manages the state of specific post list.
                [action.subreddit]: posts(state[action.subreddit], action)
            });
        default:
            return state
    }
};

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
});

export default rootReducer;