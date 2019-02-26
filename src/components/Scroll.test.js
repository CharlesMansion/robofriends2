import React from 'react';
import Scroll from './Scroll';
import {shallow} from 'enzyme';

const wrapper = shallow(<Scroll />);

it('expects Scroll to render correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

