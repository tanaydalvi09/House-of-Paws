import React, {Component} from 'react';
 import Register from './Register.png';
// import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
//import Logo6 from './Logo6.png';
 //import Marcus from './Marcus.png';
//import Logo8 from './Logo8.jpeg';


class Registration extends Component{

     componentDidMount(){
        const M = window.M;
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {});

  });

 
    }

    render(){
    return(
        <div class="row">
<div class="col s6"> 
     <div class="card">
        <div class="card-image">
          <img src={Register} />
          {/*<span class="card-title">Mom's best running buddy</span>*/}
        </div>
  </div>
      </div>
      <div class="col s6"> 
       <h5>Registration</h5>
       <div class="input-field col s8">
          <input id="first_name" type="text" class="validate" />
          <label black for="first_name">Full Name:</label>
        </div>
        <div class="input-field col s8">
          <input id="last_name" type="text" class="validate"/>
          <label black for="last_name">Email ID:</label>       
        </div>
        <div class="input-field col s8">
          <input id="last_name" type="text" class="validate"/>
          <label black for="last_name">Password:</label>       
        </div>
        <div class="row">
        <div class="input-field col s8">
        <label black for="last_name">Gender:</label> 
         </div>
         <div class="input-field col s6">
    <label>
      <input class="with-gap" name="group3" type="radio" checked />
      <span>Female</span>
    </label>
    </div>
     <div class="input-field col s6">
    <label>
      <input class="with-gap" name="group3" type="radio" checked />
      <span>Male</span>
    </label>
    </div>
</div>
 <div class="input-field col s6">
          <input right placeholder="Pick Your Birthdate" type="text" class="datepicker" />  
        
         </div>       
         <form action="#">
        <div class="input-field col s8">
      
        <input type="checkbox" />
        <span>I agree to the Terms and Conditions</span>

        </div>
          </form>
          <div class="input-field col s12"> 
          <a class="waves-effect waves-light btn">REGISTER</a>
        </div>
       

     </div>
     </div>
   
 
    
   
    )
    }
}
export default Registration