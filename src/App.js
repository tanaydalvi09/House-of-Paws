import React from 'react';
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom';
import Home from './components/Houseofpaws';
import About from './components/About';
import Contact from './components/Petcare';


function App() {
  return (
    
    <div>
  
      <Navbar />
      <Switch>
      
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/petcare' component={Contact} />
        
      </Switch>
    </div>
    
  );
}
export default App;

