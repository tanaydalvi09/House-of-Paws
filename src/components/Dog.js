import React, {Component} from 'react';
 import Logo5 from './Logo5.jpeg';
// import Logo4 from './Logo4.jpeg';
// import Logo3 from './Logo3.jpeg';
import Logo6 from './Logo6.png';
 import Marcus from './Marcus.png';
//import Logo8 from './Logo8.jpeg';


class Dog extends Component{
 

  
    render(){
    return(
        <div>
        <div class="row">
        <div class="grid-example col s12 m12">
      <ul class="left hide-on-med-and-down">
      <a href="/"> <h7><i class="tiny material-icons">arrow_back</i>  Back to Matches Found</h7></a>
      </ul>
      <ul class="right hide-on-med-and-down">
      <h7>Next Match  <i class="tiny material-icons">arrow_forward</i></h7>
      </ul>
      </div>
      </div>
      
      <div class="row">
       <div class="col s7"> 
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title ">Marcus</span> 
    <div class="row8">
    <div class="col s12 m6 l2"><p>Beagle</p></div>
    <div class="col s12 m6 l2"><p>Male</p></div>
    <div class="col s12 m6 l3"><p>Munich, Germany</p></div>
    <div class="col s12 m6 l5">
    <i class="material-icons">favorite_border</i>
    </div>
      <div class="col s12 "><hr/></div>
  </div>
<p> Marcus is the most adorable beagle. Much like any other
pets, he loves attention. He likes playing catch and would also watch TV
with you. He is well mannered and crate trained. Also socially trained to
attend pet parties. He is living with 2 other pets.
He has not been tested with other pets. </p>
 </div>

<div class="card-content black-text">
      <div class="col s4 #195381">House Trained:</div>
      <div class="col s6">Yes</div>
      </div>
      <div class="card-content black-text">
       <div class="col s4">Vacination:</div>
      <div class="col s6">Vaccinations up-to-date, spayed / neutered.</div>
    </div>
    <div class="card-content black-text">
       <div class="col s4">Likes:</div>
      <div class="col s6">Playing ball fetch, Evening walks, Play with other Pets,Sleeping on Sofa,  Icecream Treats </div>
    </div>
    <div class="card-content black-text">
       <div class="col s4">Age:</div>
      <div class="col s6">4 Months 6 days </div>
    </div>
    <div class="card-content black-text">
       <div class="col s4">Allergies:</div>
      <div class="col s6">Grapes, Raisins, Nuts</div>
    </div>
    <div class="card-content black-text">
       <div class="col s4">Dislikes:</div>
      <div class="col s6">Bathing</div>
    </div>
    <div class="card-content black-text">
       <div class="col s4">Microchipping:</div>
      <div class="col s6">Yes</div>
    </div>
          
        <div class="card-action">
          <a href="#">Adopt me</a>
        </div>
      </div>
    </div>
    <div class="col s5"> 
      <div class="card">
    <div class="card-image waves-effect waves-block waves-light 150px">
      <img class="activator" src={Marcus} alt="" />
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
       <img class="activator" src={Marcus} alt="" />
    </div>
  </div>

          
      </div>
          

</div>

<div class="row">
       <div class="col s7"> 
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title ">Tom Paw Shelter</span>
           <div class="col s12 ">-----------------------------------------------------------------------------------------------------------</div>
 </div>
<div class="card-content black-text">
      <div class="col s2 #195381">
      <i class="material-icons">location_on</i>
      </div>
      <div class="col s6">Nusslocher Str. 108, 69190 Walldorf</div>
      </div>
      <div class="card-content black-text">
       <div class="col s2">
        <i class="material-icons">phone</i>
       </div>
      <div class="col s6">06227 1057</div>
    </div>  
    <div class="card-content black-text">
      <div class="col s2 #195381">
      <i class="material-icons">location_on</i>
      </div>
      <div class="col s6">Nusslocher Str. 108, 69190 Walldorf</div>
      </div> 
        <div class="card-action">
          <a href="#">Adopt Marcus</a>
        </div>
      </div>
    </div>


    
 <div class="col s3"> 
     <div class="card">
    <div class="card">
        <div class="card-image">
          <img src={Logo5} />
          <span class="card-title">Mom's best running buddy</span>
        </div>
        <div class="card-action">
          <a href="#">Read Story ></a>
        </div>
  </div>
      </div>      
</div>


 </div>
       
</div>
    




    )
    }
}
export default Dog