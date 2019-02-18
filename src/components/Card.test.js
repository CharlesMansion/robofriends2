import React from 'react';
import {shallow} from 'enzyme'
import Card from './Card';

const wrapper = shallow(<Card/>);

it('expects to render Card', () => {
expect(wrapper).toMatchSnapshot();
});