import React, {Component} from 'react';
import Logo6 from './Logo6.png';
import Logo7 from './Logo7.png';



class HouseofPaws5 extends Component{
    componentDidMount(){
          const M = window.M;
          document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    
  });
    }
render(){
return(
   
  <div class="carousel">
  
  <h4>User Testimonials</h4>
    <a class="carousel-item" href="#one!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#two!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#three!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#four!"><img src={Logo7} /></a>
    <a class="carousel-item" href="#five!"><img src={Logo7} /></a>
  </div>
)

}
}
export default HouseofPaws5
