import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

it('Should render the Phone number correctly', () => {
    const wrapper = shallow(<Footer />)
    const span = wrapper.find('span');
    const text = span.text();

    expect(text).toBe('+49 06221 881000')
})