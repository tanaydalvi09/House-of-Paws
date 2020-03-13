import React,{Component} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import Logo from './components/Logo';
import About from './components/About';
import Contact from './components/Contact';
import Dog from './components/Dog';
import Home from './components/Home';
import Favourite from './components/Favourite';
import Registration from './components/Registration';
import UserT from './components/UserT';
import PetFinder from './components/PetFinder';
import PetSitter from './components/PetSitter';
import Events from './components/Events';
import UserT2 from './components/UserT2';
import EventInfo from './components/EventInfo';
import Recommendations from './components/Recommendations';
import PawMatches from './components/PawMatches';
import Footer from './components/Footer';






class App extends Component {


   render(){  
  return (
    <Switch>
    <Router>
    <div>
    <Navbar />
     
  <Route exact path='/' component={Home}/>

      <Route path='/Dog' component={Dog}/>
      <Route path='/Registration' component={Registration}/>
        <Route path='/Favourite' component={Favourite}/>
      <Route path='/PetFinder' component={PetFinder}/>
      <Route path='/PetSitter' component={PetSitter}/>
      <Route path='/About' component={About}/>  
      <Route path='/Contact' component={Contact}/>
           <Route path='/Events' component={Events}/>
           <Route path='/UserT' component={UserT}/>
           <Route path='/UserT2' component={UserT2}/>
           <Route path='/EventInfo' component={EventInfo}/>
            <Route path='/Recommendations' component={Recommendations}/>
 <Route path='/PawMatches' component={PawMatches}/>
   <Footer/>
        </div>
        </Router>
        </Switch>

     
       
  );
}
}
export default App;
