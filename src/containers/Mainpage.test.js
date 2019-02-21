import React from 'react';
import {shallow} from 'enzyme';
import Mainpage from './Mainpage';

describe('testing rendering of Mainpage', () => {
	let wrapper;

	beforeEach(() => {
		const mockProps = {
			onRequestRobots : jest.fn(),
			robots : [],
			isPending : false,
			searchfield : []
		}
		wrapper = shallow(<Mainpage {...mockProps}/>)
	});
	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	})
	it('filters robots correctly', () => {
		expect(wrapper.instance().filteredRobots([])).toEqual([]);
	})
})