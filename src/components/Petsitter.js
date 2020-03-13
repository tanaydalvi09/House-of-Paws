import React, {Component} from 'react';
// import Logo5 from './Logo5.jpeg';
import sitter3 from './sitter3.JPG';
import sitter7 from './sitter7.JPG';
import sitter8 from './sitter8.JPG';
import sitter5 from './sitter5.JPG';
//import Logo8 from './Logo8.jpeg';


class PetSitter extends Component{

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
<a href="/"> <h7><i class="tiny material-icons">arrow_back</i>  Back to Home</h7></a>
 </div>
 

 </div>
<div class="row blue">
 <div class="col s1 m3"> 
<i class="small material-icons white-text"></i>
</div>
 <div class="col s1 l1">
 <input type="text" class="suggester-input" placeholder="Location" />
  </div>
 <div class="col s2 l1"> 
 <input type="text" class="datepicker" placeholder="Start Date"></input> 
  </div>
  <div class="col s2 l1"> 
 <input type="text" class="datepicker" placeholder="End Date"></input> 
  </div>

  
  
  <div class="col s2 l1"> 
 <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Services</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
   </div>

 
  <div class="col s2 l1"> 
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Pets</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
  </div>

   <div class="col s2 l1">
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Gender</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
</div>
  <div class="col s1 l1">
  <button class="btn" type="submit" name="action">Search  
    {/* <i class="material-icons">search</i> */}
  </button>
  </div> 
 </div>
<div class="row">
    <div><p align="center"><h5>Available PetSitter from Nearby Places</h5></p>
</div>
</div>
    <div class="row">
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter3} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm TedMosby from Bonn. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
  
  

  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter5}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Zoey Pierson from Heilbronn. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
  
  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter7}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Lily Aldrin from Paderborn. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter8}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Marshall from Heidelberg. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
    
  </div>

     <div class="row">
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter8} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Marshall  from Heidelberg. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
  
  

  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter7}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Lily Aldrin from Paderborn. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
  
  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter5}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Zoey Pierson from Heilbronn. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={sitter3}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm TedMosby from Bonn. You can check my Profile from here from here.</p>
        </div>
        <div class="card-action">
          <a href="#">To Profile</a>
        </div>
      </div>
    </div>
    </div>
    
  </div>

 
  <div class="row">
     <div class="col12">
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






 
 

 

    )
    }

    
    
}
export default PetSitter