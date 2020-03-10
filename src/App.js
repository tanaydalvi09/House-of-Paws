import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
//import Logo from './components/Logo';
import Menu from './components/Menu';
import About from './components/About';
//import Petsitter from './components/Petsitter';
import PetFinder from './components/PetFinder';
import Home from './components/Home';


function App() {
  return (
    <Switch>
    <div>
         <Navbar />
       <Home />

      <Route path='/PetFinder' component={PetFinder}/>   
      <Route path='/menu' component={Menu}/>
      <Route path='/about' component={About}/>  
  
      </div>    
      </Switch>
    
  );
}
export default App;
