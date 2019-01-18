import React from 'react';
import {shallow} from 'enzyme'
import CounterButton from './CounterButton';

const wrapper = shallow(<CounterButton/>);

it('expects to render CounterButton', () => {
expect(wrapper.length).toEqual(1);
});