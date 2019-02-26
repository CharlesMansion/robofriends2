import React from 'react';
import Searchbox from './Searchbox';
import {shallow} from 'enzyme';

const mockSearchange = jest.fn();

const wrapper = shallow(<Searchbox searchange={mockSearchange}/>);

it('expects Searchbox to render correctly', () => {
	expect(wrapper).toMatchSnapshot();
});


