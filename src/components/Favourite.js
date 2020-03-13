import React, {Component} from 'react';
// import Logo5 from './Logo5.jpeg';
import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
// import Logo6 from './Logo6.png';
// import Logo7 from './Logo7.png';
//import Logo8 from './Logo8.jpeg';
import casper from './casper.JPG';
import molly from './molly.JPG';
import lolla from './lolla.JPG';
import marcusprofile from './marcusprofile.png';
import Dog from './Dog';
import sitter3 from './sitter3.JPG';
import sitter7 from './sitter7.JPG';
import sitter8 from './sitter8.JPG';
import sitter5 from './sitter5.JPG';


class Favourite extends Component{

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
<div class="col s12">
      <ul class="left hide-on-med-and-down">
        <h8>Back to Home</h8>
      </ul>
      </div>
 </div>
 <div class="row blue">
  </div>
 
<div class="row">
    <div><p align="center"><h5>Your Favourite Pets are Here</h5></p>
</div>
</div>
    <div class="row">
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={marcusprofile} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Marcus from Dortmund. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <a href="/Dog">Check out Marcus</a>
        </div>
      </div>
    </div>
    </div>
  
  

  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={casper}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Casper from Heidelberg. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <a href="#">Check out Casper</a>
        </div>
      </div>
    </div>
    </div>
  
  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={molly}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Molly from Mannheim. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <a href="#">Check out Molly</a>
        </div>
      </div>
    </div>
    </div>
  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={lolla}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi! I'm Lolla from Nuremberg. You can Adopt Me from here.</p>
        </div>
        <div class="card-action">
          <a href="#">Check out Lolla</a>
        </div>
      </div>
    </div>
    </div>
    
  </div>
  <div class="row blue">
  </div>
  <div class="row">
    <div><p align="center"><h5>Your Favourite PetSitter are Here</h5></p>
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

<div class="row blue">
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
</div>






 
 

 

    )
    }

    
    
}
export default Favourite