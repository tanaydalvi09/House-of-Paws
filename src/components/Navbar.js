import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
        
        <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo"><i class="material-icons">child_friendly</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html"><i class="material-icons">search</i></a></li>
            <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i class="material-icons">account_circle</i></a></li>
          </ul>
        </div>
      </nav>

    )}
export default Navbar