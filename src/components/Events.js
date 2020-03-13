import React, {Component} from 'react';
// import Logo5 from './Logo5.jpeg';
import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
// import Logo6 from './Logo6.png';
// import Logo7 from './Logo7.png';
//import Logo8 from './Logo8.jpeg';
import event from './event.JPG';
import event1 from './event1.JPG';
import event2 from './event2.JPG';
import event3 from './event3.JPG';
import event4 from './event4.JPG';
import event5 from './event5.JPG';
import event6 from './event6.JPG';
import event7 from './event7.JPG';
import event8 from './event8.JPG';
import EventInfo from './EventInfo';
import party from './party.JPG';
class Events extends Component{

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
    <div><p align="center"><h5>Social Events for your Beloved Pets</h5></p>
</div>
</div>
    <div class="row">
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={party} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet-Paw-ty Props</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
        </div>
      </div>
    </div>
    </div>
  
  

  
    <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={event6}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet Pageants party</p>
        </div>
        <div class="card-action">
          <a href="/EventInfo">View More</a>
        </div>
      </div>
    </div>
    </div>
  
  
   <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={event8} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet Art Festival</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
        </div>
      </div>
    </div>
    </div>

   <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={event7}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet Walk</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
        </div>
      </div>
    </div>
    </div>
    
  </div>

     <div class="row">
<div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={event}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet Get-together</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
        </div>
      </div>
    </div>
    </div>
  

  
           <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={party} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet-Paw-ty Props</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
        </div>
      </div>
    </div>
    </div>
  
   <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={event7}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet Walk</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
        </div>
      </div>
    </div>
    </div>
    
   <div class="col s3">
    <div class="card horizontal">
      <div class="card-image">
        <img src={event8} alt="" class="circle responsive-img"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Pet Art Festival</p>
        </div>
        <div class="card-action">
          <a href="#">View More</a>
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
export default Events