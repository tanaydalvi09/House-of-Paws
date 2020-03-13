import React, {Component} from 'react';
 //import background from './background.png';

//import Us4 from './Us4.png';
import userstory1 from './userstory1.png';
import uS1 from './uS1.png';
// import userstory3 from './userstory3.png';
// import userstory4 from './userstory4.JPG';
 
 
 
 
class UserT extends Component{
 
 
 
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
          <img class="bgd" src={userstory1} />      
        </div>          
            {/* <img class="bgd" src={background}/> */}            
      </div>
      </div>
    <div class="col s8">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title "><h5>Golden Years of Life With Pet</h5><hr/></span>
          <p>
             At 83 years young, if anyone had told me I would be in love for the second
time in my life, I would have disagreed. After I moved to Charleston in June
2017 as a widow in order to be closer to family, I knew I needed to find a
companion; I found myself talking to myself most of the time. I told all of my
friends that I was looking for a dog. My criteria were pretty simple — I didn’t
want a small dog that I might trip over, and also not a huge dog that could
pull me over when leash walking. But I knew I wanted an adult dog.

Late last Spring, I was playing bridge and had just eaten lunch when my
daughter called me about a dog she thought would be perfect for me. She was
 at Charleston Animal Society and had met “Stormy.” He was a medium-sized
senior poodle with a patch of grey here and there, an incredibly friendly
personality, and he was completely blind. I got so excited I left my credit card
at the restaurant and took off in the pouring rain to go meet Stormy at the
shelter.
              </p>
        </div>
      </div>
    </div>
    <div class="col s8">
      <div class="card white">
        <div class="card-content black-text">
        
              <p>When I arrived, I knew it was meant to be. Here was this timid black dog who
had been found out in the rain several days before. His microchip wasn’t regi
stered but he was neutered. And on top of the blindness, he was heartworm
positive and way too skinny. The shelter said he was about 10 years old. I fell in
 love instantly and knew this would be my buddy. But the name Stormy just
didn’t fit — so I renamed him Donald.

Going through the adoption process could not have been easier. It took only a
couple days for Donald to walk around the furniture in my home and not bump
into anything. He has great hearing and a terrific sense of smell, and knows
where I am by sound. He walks well on a leash and needs very little guidance
not to bump into trees or benches on walks.

All my life my dogs have been family dogs, shared with husband and children,
but this time Donald is mine — all mine! As a senior lady, I highly recommend
adopting a senior animal. No furniture chewing and as I’ve learned, you can
teach an old dog new tricks. Donald learned to sit, stay and stop (when I find
him heading toward a danger while leash walking).
              </p>
        </div>
      </div>
    </div>
    <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img class="bgd" src={uS1} />      
        </div>          
            {/* <img class="bgd" src={background}/> */}            
      </div>
      </div>
</div>
 
       
</div>
 
    )}
}
export default UserT