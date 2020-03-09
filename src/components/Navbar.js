import React, {} from 'react';
import {NavLink} from 'react-router-dom';



const Navbar = () =>{
return(
    <nav>
    <div class="nav-wrapper white">
      <a href="#!" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><NavLink to="/sass.html"><i class="material-icons">search</i></NavLink></li>
        <li><NavLink to="/badges.html"><i class="material-icons">favorite_border</i></NavLink></li>
        <li><NavLink to=".collapsible.html"><i class="material-icons">person_pin</i></NavLink></li>
      </ul>
    </div>
  </nav>
  


 
        
)

}
export default Navbar
