import React, { Component } from 'react';
import './index.css';






import { TweenLite, TweenMax, CSSPlugin, Power4 } from "gsap";



class Digit extends Component {

 constructor(props) {
   super(props);
   this.state = {
     actual_time: 777,
     lasting: 0,
     interval: 100,
     display_time: 0
   }
 }


componentDidUpdate() {
  this.change();
}

 change () {
      let second_ones = document.getElementById('second_ones'); 
      if (second_ones) TweenLite.to(second_ones, 0, { y: 0 });  
      if (second_ones) TweenLite.to(second_ones, 0.5, { y: -100, delay: 0.5 });  
 }



 notify() {

 }


  render() {

    switch(this.props.unit)
    {
    case 'second_ones':
         let next = this.props.token -1;
         if (next === -1) next = 9;


          return (
          <span className = "digit">
            <span className = "itemcontainer">
              <div onClick = {this.change.bind(this) } id = "second_ones" className = "item"> 
              { this.props.token } <br/> { next }
              </div>
            </span>
          </span>
        );
 
   case 'minute_one':

        return (
            <span className = "digit">
              <span className = "itemcontainer">
                <div onClick = {this.change.bind(this) } id = "second_tens" className = "item"> 
                { this.props.token } <br/> { next }
                </div>
              </span>
            </span>
        );



    default:  

      return (
          <span className = "digit" onClick = {this.notify.bind(this) }>
            { this.props.token }
          </span>
      );

    }

  }
}

export default Digit;