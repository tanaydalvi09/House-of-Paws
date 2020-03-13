import React, {Component} from 'react';
import userstory2 from './userstory2.png';
import Logo4 from './Logo4.jpeg';
import Logo3 from './Logo3.jpeg';
import Logo6 from './Logo6.png';
import Logo7 from './Logo7.png';
import Logo5 from './Logo5.jpeg';
import events from './events.png';
import lolla from './lolla.JPG';
import Us4 from './Us4.png';
import userstory1 from './userstory1.png';
import userstory3 from './userstory3.png';
import userstory4 from './userstory4.JPG';
import marcusprofile from './marcusprofile.png';
import petsitter from './petsitter.JPG';
import casper from './casper.JPG';
import molly from './molly.JPG';
import Dog from './Dog';
import Events from './Events';
import UserT from './UserT';
import UserT2 from './UserT2';
import Footer from './Footer';

import {NavLink} from 'react-router-dom';
//import Logo8 from './Logo8.jpeg';
 
 
 
class Home extends Component{
 
  componentDidMount(){
        const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var elem = document.querySelectorAll('.carousel');
     var instances = M.Slider.init(elems, {});
   var instance = M.Carousel.init(elem, {});
  });
 
    }
    render(){
    return(
        <div>
      <div class="slider">
    <ul class="slides">
      <li>
        <img src={Logo5} alt="Hello"/>
        <div class="caption center-align">
          <h3>Life is better with a Pet</h3>
          <h5 class="light grey-text text-lighten-3">Adopt don't Shop</h5>
        </div>
      </li>
      <li>
        <img src={Logo4} alt="Hello"/>
        <div class="caption left-align">
          <h3>Unconditional love is as close as your nearest shelter</h3>
          <h5 class="light grey-text text-lighten-3">Adoption is a Lifestyle</h5>
        </div>
      </li>
      <li>
        <img src={Logo3} alt="Hello"/>
        <div class="caption right-align">
          <h3>Love is a four-legged word</h3>
          <h5 class="light grey-text text-lighten-3"></h5>
        </div>
      </li>
    </ul>
  </div>
       <div class="row">
      <div class="col s5">
        <li>
        <img src={Logo6} alt="" />
        </li>  
      </div>
     <div class="col s7">
     <div class="col s12 m11">
    <div class="card horizontal">
      <div class="card-image">
        <img src={petsitter} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h6>Find a Pet Sitter</h6><br/><hr/>
          <p>Find a pet sitter for your pet who loves your pet as you do...</p>
        </div>
        <div class="card-action">
          <a href="/PetSitter" class="#195381-text">Click Here</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col s12 m11">
    <div class="card horizontal">
      <div class="card-image">
        <img src={events} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h6>Social Media Events</h6><br/><hr/>
          <p>Socialize your pets in your locality</p>
        </div>
        <div class="card-action">
          <a href="/Events" class="#195381-text">Click Here</a>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    <div class="row1">
<div class="grid-example col s12 m12">
<p class="flow-text">Find a variety of Available Pets for Adoption.</p>
</div>
 
</div>
<div class="row">
   
     <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={marcusprofile} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Marcus from Dortmund. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <NavLink to="/Dog" class="#195381-text">Check out Marcus</NavLink>
        </div>
      </div>
    </div>
  </div>
 
   
    <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={casper} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Casper from Heidelberg. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <NavLink to="/Dog" class="#195381-text">Check out Casper</NavLink>
        </div>
      </div>
    </div>
    </div>
   
    <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={molly} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Molly from Mannheim. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <a href="#" class="#195381-text">Check out Molly</a>
        </div>
      </div>
    </div>
    </div>
 
    <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={lolla} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Lolla from Nuremberg. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <a href="#" class="#195381-text">Check out Lolla</a>
        </div>
      </div>
    </div>
    </div>
  </div>
     <div class="carousel">
 
  <h4>User Testimonials</h4>
 
 
       
  <a class="carousel-item" href="./UserT"><img src={userstory1} /></a>
     <a class="carousel-item" href="./UserT2"><img src={userstory2} /></a>
   <a class="carousel-item" href="#three!"><img src={userstory3} /></a>
    <a class="carousel-item" href="#four!"><img src={userstory4} /></a>
    <a class="carousel-item" href="#five!"><img src={Us4} /></a>
  </div>
    </div>
 
 
 
    )
    }
}
export default Home