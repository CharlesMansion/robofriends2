import { CHANGE_SEARCHFIELD, 
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED } from './constants.js';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import nock from 'nock';

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
	it('should create an action to request robots', (done) => {
		beforeEach(() => {
		nock('https://jsonplaceholder.typicode.com')
			.get('/users')
			.reply(200, {
				name:'Don Corleone',
				email: 'don@gmail.com',
				id:13
				})
		})

		const store = mockStore();
		return store.dispatch(actions.requestRobots())
		const action = store.getActions();

		const expectedAction0 = {
			type: REQUEST_ROBOTS_PENDING,
		}
		expect(action[0]).toEqual(expectedAction0);

		const expectedAction1 = {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: {
				name:'Don Corleone',
				email: 'don@gmail.com',
				id:13
				}
		}
		expect(action[0]).toEqual(expectedAction1);
		done();

	})
})