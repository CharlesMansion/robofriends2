import React from 'react';
import {shallow} from 'enzyme'
import Cardlist from './Cardlist';

it('expects to render Cardlist', () => {
	const dbMock = [
		{
		 id:1,
		 name:'Jon Snow',
		 email:'hi@mail.com',
		 hobby:'yoghurt'
		}
	];
	const wrapper = shallow(<Cardlist robots={dbMock}/>);
	expect(wrapper).toMatchSnapshot();
});