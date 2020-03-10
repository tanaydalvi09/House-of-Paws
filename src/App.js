import React,{Component} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
//import Logo from './components/Logo';
import Menu from './components/Menu';
import About from './components/About';
//import Petsitter from './components/Petsitter';
import Dog from './components/Dog';
import Home from './components/Home';


class App extends Component {


   render(){  
  return (
    <div>
    <Switch>
    <div>
         <Navbar />
     
  <Route exact path='/' component={Home}/>
      <Route path='/Dog' component={Dog}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/about' component={About}/>  
  
      </div>    
      </Switch>
        </div>
  );
}
}
export default App;
