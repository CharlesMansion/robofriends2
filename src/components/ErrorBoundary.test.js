import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {shallow} from 'enzyme';


it('expects ErrorBoundary to render correctly', () => {
	const wrapper = shallow(<ErrorBoundary/>);
	
	expect(wrapper).toMatchSnapshot();
	expect(wrapper.instance().componentDidCatch()).toBeFalsy();
});