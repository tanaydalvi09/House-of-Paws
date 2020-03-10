import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import {Route, Switch} from 'react-router-dom';
//import Logo from './components/Logo';
import Menu from './components/Menu';
import About from './components/About';
//import Petsitter from './components/Petsitter';
//import PetFinder from './components/PetFinder';
import Houseofpaws from './components/Houseofpaws';
import HouseofPaws2 from './components/HouseofPaws2';
import Houseofpaws3 from './components/Houseofpaws3';
import Houseofpaws4 from './components/Houseofpaws4';
import Houseofpaws5 from './components/Houseofpaws5';
import PetFinder from './petfinder/PetFinder';


function App() {
  return (
    <div>
      <Navbar />
         <Navbar1 />
         <Houseofpaws />
          <HouseofPaws2 />
          <Houseofpaws3 />
         <Houseofpaws4 />
           <Houseofpaws5 />
           <PetFinder />
      <Switch>
      <Route path='/menu' component={Menu}/>
      <Route path='/about' component={About}/>     
      </Switch>
    </div>
  );
}

export default App;
