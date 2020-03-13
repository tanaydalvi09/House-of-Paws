import React, {Component} from 'react';
 //import background from './background.png';
import abouts from './abouts.png';
 
 
 
 
class About extends Component{
 
 
 
    render(){
    return(
        <div>
        <div class="row">
       
 
 
        <div class="grid-example col s12 m12">
      <ul class="left hide-on-med-and-down">
      <a href="/"> <h7><i class="tiny material-icons">arrow_back</i>  Back to Home</h7></a>
      </ul>
      </div>
      </div>
     
<div class="row">
      <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img class="bgd" src={abouts} />      
        </div>          
            {/* <img class="bgd" src={background}/> */}            
      </div>
      </div>
    <div class="col s8">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title "><h4>Background</h4><hr/></span>
              <p>Today millions of animals are currently in shelters and fosters homes awaiting
              for adoption.
              <br></br>
 
 
              One of the reasons there are so many pets in shelters is because the adoption
              process is lengthy. The process is unnecessarily complex and potential
              owners can sometimes be unaware of the financial and social decisions that
              go into pet adoption.
 
              Pet adoption can be an overwhelming process, so it’s important the team is
              sensitive to how and when they’re presenting information.
              By partnering with shelters all over the country—and eventually worldwide—
              House of Paws wants to create a platform that allows people to see all the
              available animals in any shelter close to them.
 
              Awareness of Pet Adoption and Pet Care is the primary goal of
              House of Paws.
 
             
              </p>
        </div>
      </div>
    </div>
    <div class="col s8">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title "><h4>About Us</h4><hr/></span>
              <p>Research revealed that one of the biggest determining factors in the pet
            adoption process is determining the depth of connection and chemistry
            between the pet and the prospective owner. Users want to be able to see how
            the pet interacts with other pets and people of various age groups. Since an
            online platform cannot give users direct access to the pet in a physical way,
            I have designed a platform that allows them to view images and videos of each
            pet. This will give users deeper insights into the pet’s behavior by providing
            them with a visual platform on which they can see pets interact with various
            elements such as a toy, people or other pets. Providing people with advanced
            and valuable information will also encourage users to take the next step in
            getting to know the pet personally.
 
            Design a responsive website that covers core functionality: search for pets,
            information about specific pets, and information about House of Paes and
            shelters.
            House of Paws doesn’t have a defined brand, so they are also looking for a new
            branding.
             
              </p>
        </div>
      </div>
    </div>
</div>
 
       
</div>
 
    )}
}
export default About