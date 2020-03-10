import React, { Component } from 'react';


class PetFinder extends Component{
    componentDidMount(){
        const M = window.M;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.pagination');
     var instances = M.pagination.init(elems, {});
  });
    }

render(){    
    return(
<ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
    )

}
}
export default PetFinder