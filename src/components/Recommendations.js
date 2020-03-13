import React, { Component } from 'react';
import Dog from './Dog.JPG';
import Cat from './Cat.jpeg';
import Hamster from './Hamster.JPG';
import Bird from './Parrot.JPG';
import Bunny from './Rabbit.JPG';
import Logo5 from './Logo5.jpeg';
import Plus from './plus.jpg';
import Quiz1 from './quiz1.JPG';
import Quiz2 from './quiz2.JPG';
import Quiz3 from './quiz3.JPG';
import Quiz4 from './quiz4.JPG';
import Quiz5 from './quiz5.JPG';
import Quiz6 from './quiz6.JPG';
import Quiz7 from './quiz7.JPG';
import {NavLink} from 'react-router-dom';
import PawMatches from './PawMatches';






class Recommendations extends Component{

    componentDidMount(){
        const M = window.M;
       document.addEventListener('DOMContentLoaded', function() {
           var elems = document.querySelectorAll('.parallax');
           var instances = M.Parallax.init(elems, {});

       });
    }
    render()
    
    {

        return(
<div>


            <div class="parallax-container">
            <div class="parallax">
            <img src={Quiz1} alt=""></img>
            </div>
          </div>
          

          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>What type of pet are you interested in?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row5 valign-wrapper">
            <div class="col s12">
              <img src={Dog} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s12">
              <img src={Cat} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s12">
              <img src={Hamster} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s12">
              <img src={Bird} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s12">
              <img src={Bunny} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s12">
              <img src={Plus} alt="" class="circle responsive-img"/>
            </div>
            
            
            {/* <div class="col s10">
              <span class="black-text">
                
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
            </div>
          </div>

          <div class="parallax-container">
            <div class="parallax"><img src={Quiz2} alt="" /></div>
          </div>

          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>What describes you the best?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel">
          <div class="row5 valign-wrapper">
            <div class="col s9">
            <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Loving</span>
        </label>
        </p>
        </div>

        <div class="col s10">
        <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Logical</span>
        </label>
        </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
      </div>
      </div>

      <div class="parallax-container">
            <div class="parallax"><img src={Quiz3} alt="" /></div>
          </div>


          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>What describes you the best?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row5 valign-wrapper">
          <div class="col s9">
            <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Sensitive</span>
        </label>
        </p>
        </div>

        <div class="col s10">
        <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Tough</span>
        </label>
        </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
      </div>
      </div>


      <div class="parallax-container">
            <div class="parallax"><img src={Quiz4} alt="" /></div>
          </div>


          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>What describes you the best?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row5 valign-wrapper">
          <div class="col s9">
            <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Impatient</span>
        </label>
        </p>
        </div>

        <div class="col s10">
        <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Easy Going</span>
        </label>
        </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
      </div>
      </div>

      <div class="parallax-container">
            <div class="parallax"><img src={Quiz5} alt="" /></div>
          </div>

          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>Do you like going out for a walk?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row5 valign-wrapper">
          <div class="col s9">
            <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Yes</span>
        </label>
        </p>
        </div>

        <div class="col s10">
        <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>No</span>
        </label>
        </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
      </div>
      </div>


      <div class="parallax-container">
            <div class="parallax"><img src={Quiz6} alt="" /></div>
          </div>

          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>My friends describe me as empathetic?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row5 valign-wrapper">
          <div class="col s9">
            <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Agree</span>
        </label>
        </p>
        </div>

        <div class="col s10">
        <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Disagree</span>
        </label>
        </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
      </div>
      </div>


      <div class="parallax-container">
            <div class="parallax"><img src={Quiz7} alt="" /></div>
          </div>

          <div class="section white">
            <div class="row container">
              <h4 class="header">Your perfect Paw Match is just a quiz away.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              <h5>I want a pet that would enjoy social events?</h5></p>
              <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row5 valign-wrapper">
          <div class="col s9">
            <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Agree</span>
        </label>
        </p>
        </div>

        <div class="col s10">
        <p>
        <label>
        <input class="with-gap" name="group3" type="radio" checked />
        <span>Disagree</span>
        </label>
        </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <p>Scroll down</p>
      <a class="btn-floating pulse"><i class="material-icons">pan_tool</i></a>
      </div>
      <div>
          
      <NavLink to="/PawMatch"><button class="btn waves-effect waves-light" name="action">My Match 
    {/* <i class="material-icons">search</i> */}
  </button></NavLink>


      </div>
      </div>
      </div>


      <div class="parallax-container">
            <div class="parallax"><img src={Logo5} alt="" /></div>
          </div>

          <div class="section white">
            <div class="row container">
              <h4 class="header">Let's find out how paw match works.</h4>
              <p class="grey-text text-darken-3 lighten-3">
              </p>
              <div class="row">
                  <div class="col s6">
                  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
        <i class="medium material-icons">assignment</i>
          <span class="card-title">Answer few questions</span>
          <p>Answer a few questions and find your perfect Paw Match on House of Pets. </p>
        </div>
        
      </div>
    </div>
  </div>
                  </div>

                  <div class="col s6">
                  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
        <i class="medium material-icons">loyalty</i>
          <span class="card-title" >Pet Match</span>
          
          <NavLink to="/PawMatches"><button class="btn" name="action">Paw Matches
    {/* <i class="material-icons">search</i> */}
  </button></NavLink>
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


export default Recommendations