import { CHANGE_SEARCHFIELD, 
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED } from './constants.js';

import {ApiCall} from './api/ApiCall';

export const setSearchfield = (text) => ({
	type: CHANGE_SEARCHFIELD,
	payload: text
});

export const requestRobots = () => (dispatch) => {
	dispatch({type : REQUEST_ROBOTS_PENDING});
	ApiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({type : REQUEST_ROBOTS_SUCCESS, payload:data}))
    .catch(error => dispatch({type : REQUEST_ROBOTS_FAILED, payload:error}));
}