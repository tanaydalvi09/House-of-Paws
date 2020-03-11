import React, {Component} from 'react';
import Logo6 from './Logo6.png';

class About extends Component{

  componentDidMount(){
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, {});
    });
  }
    render(){
    return(
        <div>
        <div class="row">
        <div class="grid-example col s12 m12">
      <ul class="left hide-on-med-and-down">
      
       <a href="/"> <h7><i class="tiny material-icons">arrow_back</i>  Back to Home</h7></a>
      </ul><li><div> <img class="materialboxed" width="650" src={Logo6} /></div></li>
     
      </div>
      </div>
      </div>
    )

}}
export default About
