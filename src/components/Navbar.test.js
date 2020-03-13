import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Navbar from './Navbar';

it('Should render the About Us correctly', () => {
    const wrapper = shallow(<Navbar />)
    const span = wrapper.find('span');
    const text = span.text();

    expect(text).toBe('Keep me loged In')
})