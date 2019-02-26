import { CHANGE_SEARCHFIELD, 
		 REQUEST_ROBOTS_PENDING,
		 REQUEST_ROBOTS_SUCCESS,
		 REQUEST_ROBOTS_FAILED } from './constants.js';

import * as reducers from './reducers';

describe('testing SearchRobots reducer', () => {
	it('spits out initial state correctly', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({searchfield:''});
	})
	it('handles CHANGE_SEARCHFIELD well', () => {
		expect(reducers.searchRobots('', 
			{
				type: CHANGE_SEARCHFIELD,
				payload: 'abc'
			})
		).toEqual({searchfield:'abc'});
	})
})

describe('testing RequestRobots reducer', () => {

	const initialStateRobots = {
	isPending: '',
	robots: [],
	error: ''
}

	it('spits out initial state correctly', () => {
		expect(reducers.requetRobots(undefined, {})).toEqual(initialStateRobots);
	})
	it('handles REQUEST_ROBOTS_PENDING well', () => {
		expect(reducers.requetRobots('', 
		{
			type: REQUEST_ROBOTS_PENDING,
		})
		).toEqual({
			isPending:true,
			})
	})
	it('handles REQUEST_ROBOTS_SUCCESS well', () => {
		expect(reducers.requetRobots('', 
		{
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id:101,
				name: 'Johnny BG',
				email:'test@caramail.com'}]
		})
		).toEqual({
			isPending:false,
			robots:[{
				id:101,
				name: 'Johnny BG',
				email:'test@caramail.com'}],
		})
	})
	it('handles REQUEST_ROBOTS_FAILED well', () => {
		expect(reducers.requetRobots('', 
		{
			type: REQUEST_ROBOTS_FAILED,
			payload: 'Dang!'
		})
		).toEqual({
			error:'Dang!',
			isPending: false
		})
	})
})