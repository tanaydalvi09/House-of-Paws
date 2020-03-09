import React, {Component} from 'react';
import Logo6 from './Logo6.png';
import Logo7 from './Logo7.png';



class HouseofPaws2 extends Component{
    componentDidMount(){
        const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
     var instances = M.Slider.init(elems, {});
  });
    }
render(){
return(
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

        
)

}
}
export default HouseofPaws2
