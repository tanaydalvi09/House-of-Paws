import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Logo5 from './Logo5.jpeg';
import Registration from './Registration';



class Navbar extends Component{
    componentDidMount(){
        const M = window.M;
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

 
    }

    render(){
return(
  <div>
<div class="navbar-fixed"> 

   <nav>
    <div class="nav-wrapper white">
      <a href="#!" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><NavLink to="/sass.html"><i class="material-icons">search</i></NavLink></li>
        <li><NavLink to="/badges.html"><i class="material-icons">favorite_border</i></NavLink></li>
        {/*<li><NavLink to="./Registration"><i class="material-icons">person_pin</i></NavLink></li>*/}
      <a class="waves-effect modal-trigger" href="#modal1"><i class="material-icons">person_pin</i></a>
     <div id="modal1" class="modal">
    <div class="modal-content">
      <div class="row">
<div class="col s6"> 
     <div class="card">
        <div class="card-image">
          <img src={Logo5} />
          {/*<span class="card-title">Mom's best running buddy</span>*/}
        </div>
  </div>
      </div>
      <div class="col s6"> 
     <form class="card">
       <h5 center>LOGIN</h5>
       <div class="input-field col s12">
          <input placeholder="Enter Email Id" id="first_name" type="text" class="validate" />
          <label black for="first_name">Email ID:</label>
        </div>
        <div class="input-field col s12">
          <input placeholder="Enter Password" id="last_name" type="text" class="validate"/>
          <label black for="last_name">Password:</label>
          
        </div>
         <form action="#">
        <div class="input-field col s12">
      
        <input type="checkbox" />
        <span>Keep me loged In</span>

        </div>
          </form>
          <div class="input-field col s12"> 
          <a class="waves-effect waves-light btn">LOGIN</a>
        </div>
       
  </form>
      </div>
      </div>  
    </div>
  
 <div class="container center">
    <div class="col s12"> 
    <a class="waves-effect waves-light btn modal-trigger" ><NavLink to="/Registration">New User? Sign Up Here</NavLink></a>
    </div>
     </div> 
      <div class="col s12">     
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">
       <i class="material-icons">close</i>
       </a>
      </div>
      </div>

      </ul>
    </div>
  </nav>
  </div>

<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper blue">
    <a href="Paw.png" class="brand-logo center">Logo</a>
      <ul id="nav-mobile" class="left  hide-on-med-and-down">
        <li><NavLink to="/PetFinder">Pet Finder</NavLink></li>
        <li><NavLink to="/petsitter">Pet Sitting</NavLink></li>
        </ul>
         <ul id="nav-mobile" class="right1  hide-on-med-and-down">
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>           
      </ul>
     </div>
    </nav>
 </div>


  

 </div>



 
        
)

}
}
export default Navbar
