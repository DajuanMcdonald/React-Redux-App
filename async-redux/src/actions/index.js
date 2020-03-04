// actions fetch the api, always use this location for API calls or actions that dispatch
import axios from 'axios';

export const FETCH_API_START = 'FETCH_API_START';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_API_FAIL = 'FETCH_API_FAIL';

export const getAPI = () => dispatch => {
    dispatch({type: FETCH_API_START});
    axios.get('')
    .then()
    .catch()
}