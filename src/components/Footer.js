import React, { Component } from 'react';
import {Navlink} from 'react-router-dom';



class Footer extends Component{

    render()
    {

    return(
<div>
<div class="row blue">
<footer class="page-footer blue">
              <div class="col s5">
                <h6>House of Paws</h6>
                <p class="grey-text text-lighten-4">We connect you to 
thousands of animals that 
are looking to be your pets.</p>
              </div>

              <div class="col s3">
                <h6 class="white-text">Navigation</h6>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Services</a></li>
                </ul>
              </div>

              <div class="col s4">
                <h6 class="white-text">Contact</h6>
                <p class="grey-text text-lighten-4">Ludwigs Guttmann Straße-6, Heidelberg</p>
                <p class="grey-text text-lighten-4">info.houseofpaws@gmail.com</p>
                <span><p class="grey-text text-lighten-4">+49 06221 881000</p></span>
              </div>

 
     
      
        </footer>
</div>
</div>


    )

    }

}
export default Footer
