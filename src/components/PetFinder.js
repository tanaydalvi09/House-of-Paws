import React, {Component} from 'react';
// import Logo5 from './Logo5.jpeg';
// import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
// import Logo6 from './Logo6.png';
// import Logo7 from './Logo7.png';
//import Logo8 from './Logo8.jpeg';


class PetFinder extends Component{

//     componentDidMount(){
//         const M = window.M;
//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.pagination');
    //var elem = document.querySelectorAll('.carousel');
   //  var instances = M.Pagination.init(elems, {});
   //var instance = M.Carousel.init(elem, {});
 // });
 
    //}
    componentDidMount(){
     const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
       // var elem = document.querySelectorAll('.dropdown-trigger');

        var options = document.querySelectorAll('.alignment')
        var instances = M.Dropdown.init(elems, options);
        //var instance = M.Dropdown.getInstance(elem);
       // instance.open();

      });

    }
  
    render(){
    return(
        <div>

<div class="row">
<div class="col s2">
 <i class="material-icons">arrow_back</i>
 <h7>Back to Home</h7>
 </div>
 
 </div>

 <div class="row3">
 <div class="col s12">

 <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Distance</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Breed</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Age</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Gender</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

  <button class="btn waves-effect waves-light" type="submit" name="action">Search
    <i class="material-icons search">send</i>
  </button>
  
 </div>
 </div>

 
     <div class="row">
     <div class="col8">
     <ul class="pagination">
<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
<li class="active"><a href="#!">1</a></li>
<li class="waves-effect"><a href="#!">2</a></li>
<li class="waves-effect"><a href="#!">3</a></li>
<li class="waves-effect"><a href="#!">4</a></li>
<li class="waves-effect"><a href="#!">5</a></li>
<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>
</div>
</div>
</div>

 
 

/* <div class="pagination">
<ul class="pagination">
<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
<li class="active"><a href="#!">1</a></li>
<li class="waves-effect"><a href="#!">2</a></li>
<li class="waves-effect"><a href="#!">3</a></li>
<li class="waves-effect"><a href="#!">4</a></li>
<li class="waves-effect"><a href="#!">5</a></li>
<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
</ul>
</div> */

    )
    }

    
    
}
export default PetFinder