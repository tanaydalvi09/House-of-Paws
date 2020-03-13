import React, {Component} from 'react';
 //import background from './background.png';

//import Us4 from './Us4.png';
import userstory2 from './userstory2.png';
import Us2 from './Us2.png';
// import userstory3 from './userstory3.png';
// import userstory4 from './userstory4.JPG';
 
 
 
 
class UserT2 extends Component{
 
 
 
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
          <img class="bgd" src={userstory2} />      
        </div>          
            {/* <img class="bgd" src={background}/> */}            
      </div>
      </div>
    <div class="col s8">
      <div class="card white">
        <div class="card-content black-text">
          <span class="card-title "><h5>Mom's best running buddy</h5><hr/></span>
          <p>
             Hudson didn’t just change my life, he made it better. My husband Mike and I
rescued Hudson in June 2017 shortly after finding out we were pregnant with
our first baby. Hudson was 10 weeks old and I was 10 weeks pregnant, and
we knew it was meant to be. He spent my entire pregnancy at my side, and
we are pretty sure he knew I was in labor before I did.

             After B was born, I didn’t suffer from postpartum depression; however, there
were days when I started to feel lonely and a bit isolated. But before those
feelings became too overwhelming I realized that I wasn’t alone. Just like the
months before B was born, Hudson was by my side. He made sure to always
be with me. He kept me company even with a screaming newborn in his ear.
He didn’t care, as long as he knew I was okay.

              As the weeks got easier, and our routine more solid, I started to focus more on
getting back to “normal.” I had gained close to 60 pounds during my pregnancy
, and finding the motivation to exercise like I did before baby just wasn’t there
anymore.
              </p>
        </div>
      </div>
    </div>
    <div class="col s8">
      <div class="card white">
        <div class="card-content black-text">
        
              <p>               I used to hate running, but after B was born, a quick run in the neighbourhood
felt like the only option I had for exercise. It wasn’t fun, so it became easy to put
it off or make an excuse not to go. Then Hudson changed the game.

                 One morning, Mike suggested I take Hudson with me to burn his puppy energy
and that was the start of the best year of my life. Hudson became my favorite
running buddy. We run around three times a week, at least two to three miles
each time. This past June, we completed our first 5K together and came in
second place for my age group. Together, we’ve run over 150 miles.

                Dogs have these amazing spirits that make you feel like you can do anything.
Whether it was hot and muggy, or cold and rainy, we still ran. Why? Because
Hudson wanted to, and seeing him so happy made me want to run more.
Thanks to Hudson and his passion for running, I’ve lost the 60 pounds I gained
from my pregnancy and then some. Hudson has truly made my life better, and
made me healthier. He has inspired me to keep running, and we’re already
signed up for our next race.

              </p>
        </div>
      </div>
    </div>
    <div class="col s4">
      <div class="card">
        <div class="card-image">
          <img class="bgd" src={Us2} />      
        </div>          
            {/* <img class="bgd" src={background}/> */}            
      </div>
      </div>
</div>
 
       
</div>
 
    )}
}
export default UserT2