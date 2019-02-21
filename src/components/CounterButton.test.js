import React from 'react';
import {shallow} from 'enzyme'
import CounterButton from './CounterButton';

describe('testing statefulness of CounterButton', () => {
	const wrapper = shallow(<CounterButton />)
	const instance = wrapper.instance();

	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
		wrapper.find('[id="counter"]').simulate('click');
		expect(instance.state.count).toEqual(1);
	})
})

