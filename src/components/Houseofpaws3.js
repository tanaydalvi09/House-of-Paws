import React, {Component} from 'react';
// import Logo6 from './Logo6.png';
// import Logo7 from './Logo7.png';



class HouseofPaws3 extends Component{
    componentDidMount(){
        const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
     var instances = M.Slider.init(elems, {});
  });
    }
render(){
return(
<div class="row1">
<div class="grid-example col s12 m12">
<p class="flow-text">Find a variety of Available Pets for Adoption.</p>
</div>

</div>
    
)

}
}
export default HouseofPaws3
