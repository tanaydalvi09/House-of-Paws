import React, {Component} from 'react';
 import Logo5 from './Logo5.jpeg';
// import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
import event9 from './event9.JPG';
import event6 from './event6.JPG';


class EventInfo extends Component{
 

  
    render(){
    return(
        <div>
<div class="row">
<div class="grid-example col s12 m12">
      <ul class="left hide-on-med-and-down">
      <a href="/Events"> <h7><i class="tiny material-icons">arrow_back</i>  Back to Social Events</h7></a>
      </ul>
      </div>
      </div>
      
      <div class="row">
       <div class="col s7"> 
      <div class="card white">
        <div class="card-content black-text">
            <div class="col s12">
          <span class="card-title ">Pet Pageants</span> 
          </div>
   
    <div class="col s12"><p>Mannheim, Germany</p></div>
 
      <div class="col s12 ">------------------------------------------------------------------------------------------------------</div>
 
  <div class="col s12">
<p> Your pets beauty deserve to be celebrated. Pet pageant features every month
for your pets. Enter monthly contests featuring your awesome pet! Earn cash,
prizes and publicity knowing that a portion of the proceeds benefits an
animal charity. </p>
</div>
 </div>
    
    <div class="col s5"> 
      <div class="card">
    <div class="card-image waves-effect waves-block waves-light 150px">
      <img class="activator" src={event6} alt="" />
    </div>
    
  </div>

          
      </div>
          

</div>

<div class="row">
       <div class="col s7"> 
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title ">Event Address</span>
           <div class="col s12 ">-----------------------------------------------------------------------------------------------------------</div>
 </div>
<div class="card-content black-text">
      <div class="col s2 #195381">
      <i class="material-icons">location_on</i>
      </div>
      <div class="col s6">Nueheim Str. 118, 69135 Paradplatz</div>
      </div>
      <div class="card-content black-text">
       <div class="col s2">
        <i class="material-icons">phone</i>
       </div>
      <div class="col s6">06227 1057</div>
    </div>  
    
    
 <div class="col s3"> 
     <div class="card">
    <div class="card">
        <div class="card-image">
          <img src={event9} />
          <span class="card-title"></span>
        </div>
        <div class="card-action">
          <a href="/UserT2"></a>
        </div>
  </div>
      </div>      
</div>


 </div>
       
</div>
    

</div>
</div>
</div>
</div>


    )
    }
}
export default EventInfo