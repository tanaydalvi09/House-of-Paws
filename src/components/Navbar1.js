import React, {} from 'react';
import {NavLink} from 'react-router-dom';



const Navbar1 = () =>{
return(
    <nav >
    <div class="nav-wrapper blue">
    <a href="#!" class="brand-logo center">Logo</a>
      <ul id="nav-mobile" class="left  hide-on-med-and-down">
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/petsitter">Pet Sitter</NavLink></li>
        </ul>
         <ul id="nav-mobile" class="right1  hide-on-med-and-down">
        <li><NavLink to="/petcaretaker">Pet Caretaker</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>           
      </ul>
     </div>
    </nav>


 
        
)

}
export default Navbar1
