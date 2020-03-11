import React, {} from 'react';
import {NavLink} from 'react-router-dom';



const Navbar = () =>{
return(
  <div>
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
  <nav >
    <div class="nav-wrapper blue">
    <a href="Paw.png" class="brand-logo center">Logo</a>
      <ul id="nav-mobile" class="left  hide-on-med-and-down">
        <li><NavLink to="/PetFinder">Pet Finder</NavLink></li>
        <li><NavLink to="/petsitter">Pet Sitting</NavLink></li>
        </ul>
         <ul id="nav-mobile" class="right1  hide-on-med-and-down">
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/petcare">Contact</NavLink></li>           
      </ul>
     </div>
    </nav>
 </div>
  


 
        
)

}
export default Navbar
