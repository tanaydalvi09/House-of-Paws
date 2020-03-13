import React, { Component } from 'react';
import {shallow} from 'enzyme';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import App from './App';


it ('Should render both components', () =>{
    const wrapper = shallow(<App />)
    const footer = wrapper.find('Footer')
    

    expect(footer.exists()).toBe(true)
    
} )