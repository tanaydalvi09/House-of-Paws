import React, {} from 'react';
import {NavLink} from 'react-router-dom';




const Navbar1 = () =>{
return(
    <nav >
    <div class="nav-wrapper blue">
    <a href="Paw.png" class="brand-logo center">Logo</a>
      <ul id="nav-mobile" class="left  hide-on-med-and-down">
        <li><NavLink to="/menu">Pet Finder</NavLink></li>
        <li><NavLink to="/petsitter">Pet Sitting</NavLink></li>
        </ul>
         <ul id="nav-mobile" class="right1  hide-on-med-and-down">
        <li><NavLink to="/petcaretaker">About Us</NavLink></li>
        <li><NavLink to="/about">Contact</NavLink></li>           
      </ul>
     </div>
    </nav>


 
        
)

}
export default Navbar1
