import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';


it('expects Header to render correctly', () => {
	const wrapper = shallow(<Header/>);
	
	expect(wrapper).toMatchSnapshot();
	expect(wrapper.instance().shouldComponentUpdate()).toBeFalsy();
});