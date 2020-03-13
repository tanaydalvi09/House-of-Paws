import React, {Component} from 'react';
// import Logo5 from './Logo5.jpeg';
import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
// import Logo6 from './Logo6.png';
// import Logo7 from './Logo7.png';
//import Logo8 from './Logo8.jpeg';


class Contact extends Component{

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

        var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
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
<div class="row3">
<i class="small material-icons white-text">place</i>
 <input type="text" class="suggester-input" placeholder="Location" />
 
    {/* <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate"></input>
          <label for="icon_prefix">First Name</label>
        </div>
        </div>
    </form> */}

  
  <input type="text" class="datepicker" placeholder="Start Date"></input>
  
  {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Start Date</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul> */}
  <input type="text" class="datepicker" placeholder="End Date"></input>
 
  {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>End Date</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul> */}

  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Services</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

  
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>No. of Pets</a>
 <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>

  
  <button class="btn waves-effect waves-light" type="submit" name="action">Search  
    {/* <i class="material-icons">search</i> */}
  </button>
  
 
 </div>
 


<div class="container">
    <div><p align="center"><h5>Available Pet Sitters</h5></p>

    <div class="row">
    
    {/* //////////////////////////////////////////////////////////////////////////////////// */}
    <div class="col s4 m3">
    
                   <div class="card">
 
                   <div class="row white">
                        
                        <div class="col l5">
                          <div class="row">
                            <h5 class="black-text">Ted Mosby</h5>
                            <h6 class="black-text">Speciality: Dogs</h6>
                          </div>
                        </div>
                        <div class="col s7"><img src={Logo4} alt="Avatar" class="circle"/></div>    
                        </div>
 
                      <div class="row white">
                          <div class="col s2"><i class="small material-icons">euro_symbol</i></div>
                          <div class="col s1"><h6 class="black-text">8/Hr</h6></div>
                       </div>
 
                      <div class="row white">
                          <div class="col s2"><i class="small material-icons">location_on</i></div>
                          <div class="col s1"><h6 class="black-text">Freiburg</h6></div>
                      </div>
 
                      <div class="row white">
                          <div class="col s2"><i class="small material-icons">border_color</i></div>
                          <div class="col s1"><i class="small material-icons">star star star star</i></div>
                          
                      </div>
                      <div class="row white">
                      
                      <div class="col s12"><i class="small material-icons">favorite</i></div>
                      </div>
                  </div>
                 </div>    
 
  
{/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
  
<div class="col s4 m4">
    
    <div class="card">

       <div class="row">
         
         <div class="col l5">
           <div class="row">
             <h5 class="black-text">Ted Mosby</h5>
             <h6 class="black-text">Speciality: Dogs</h6>
           </div>
         </div>
         <div class="col s7"><img src={Logo4} alt="Avatar" class="circle"/></div>    
       </div>

       <div class="row">
           <div class="col s2"><i class="small material-icons">euro_symbol</i></div>
           <div class="col s1"><h6 class="black-text">8/Hr</h6></div>
        </div>

       <div class="row">
           <div class="col s2"><i class="small material-icons">location_on</i></div>
           <div class="col s1"><h6 class="black-text">Freiburg</h6></div>
       </div>

       <div class="row">
           <div class="col s2"><i class="small material-icons">border_color</i></div>
           <div class="col s1"><i class="small material-icons">star star star star</i></div>
           
       </div>
       <div class="row">
       
       <div class="col s12"><i class="small material-icons">favorite</i></div>
       </div>
   </div>
  </div>
  
  
    <div class="col s4 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo4}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Hi I´m Zoey from frieburg. Here are my details.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    </div>
  
    <div class="col s4 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo4}/>
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
  

    <div class="row">
    <div class="col s4 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo4}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Ted Mosby</p>
        </div>
        </div>
        </div>
        </div>
        <div class="col s4 m4">
        <div class="card-content">
          <p>Ted Mosby</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    </div>
  

  
    <div class="col s4 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo4}/>
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
  

  
    <div class="col s4 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo4}/>
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

  
    <div class="col s4 m4">
    <div class="card horizontal">
      <div class="card-image">
        <img src={Logo4}/>
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

   


 
     <div class="row5">
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

    )
    }

        
}


export default Contact;