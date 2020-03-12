import React,{Component} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
//import Logo from './components/Logo';
import About from './components/About';
import Contact from './components/Contact';
import Dog from './components/Dog';
import Home from './components/Home';

import Registration from './components/Registration';

import PetFinder from './components/PetFinder';
import PetSitter from './components/PetSitter';





class App extends Component {


   render(){  
  return (
    
    <Switch>
    <div>
    <Navbar />
     
  <Route exact path='/' component={Home}/>

      <Route path='/Dog' component={Dog}/>
      <Route path='/Registration' component={Registration}/>
 


      <Route path='/PetFinder' component={PetFinder}/>
      <Route path='/PetSitter' component={PetSitter}/>
      <Route path='/About' component={About}/>  
      <Route path='/Contact' component={Contact}/>

  
        </div>
      </Switch>
       
  );
}
}
export default App;
