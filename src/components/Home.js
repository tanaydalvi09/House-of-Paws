import React, {Component} from 'react';
import Logo5 from './Logo5.jpeg';
import Logo4 from './Logo4.jpeg';
import Logo3 from './Logo3.jpeg';
import Logo6 from './Logo6.png';
import Logo7 from './Logo7.png';
import Dog from './Dog';
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
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src={Logo4} alt="Hello"/> 
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src={Logo3} alt="Hello"/> 
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
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
        <img src={Logo7} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col s12 m11">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo7} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
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
        <img src={Logo7} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <NavLink to="/Dog">Marcus</NavLink>
        </div>
      </div>
    </div>
  </div>
  
   
    <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo7} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    </div>
   
    <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo7} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    </div>

    <div class="col s12 m6 l3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo7} alt="" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    </div>
  </div>
     <div class="carousel">
  
  <h4>User Testimonials</h4>
    <a class="carousel-item" href="#one!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#two!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#three!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#four!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#five!"><img src={Logo7} /></a>
  </div>
    </div>



    )
    }
}
export default Home