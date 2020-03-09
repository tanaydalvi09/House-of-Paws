import React, {Component} from 'react';
import Logo5 from './Logo5.jpeg';
import Logo4 from './Logo4.jpeg';
import Logo3 from './Logo3.jpeg';


class Houseofpaws extends Component{
  
    componentDidMount(){
        const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
     var instances = M.Slider.init(elems, {});
  });
 
    }
    render(){
    return(
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
      

    )
    }
}
export default Houseofpaws