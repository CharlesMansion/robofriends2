import { CHANGE_SEARCHFIELD, 
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED } from './constants.js';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('testing the Searchfield action', () => {
	it('should create an action to search robots', () => {
		const text = 'Ice Cold!'
		const expectedAction = {
			type: CHANGE_SEARCHFIELD,
			payload:text
		}
		expect(actions.setSearchfield(text)).toEqual(expectedAction);
	})
})

describe('testing the requestRobots action', () => {
	it('should create an action to request robots', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots())
		const action = store.getActions();
		console.log('store', store);
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING,
		}
		expect(action[0]).toEqual(expectedAction);
	})
})