import React, { Component } from 'react';
// import './styles.css';

import { TweenLite, TweenMax, CSSPlugin, Power4 } from "gsap";

import Animator from '../Animator';
// import Slider from './slider';


'use strict';

class Titelei extends Component {

 constructor(props) {
   super(props);

    this.title = "Der Titel";


   if (this.props.options) {
      let o = this.props.options;
      this.options = o;

      if (o.title) this.title = o.title; 
   }


    this.state = {
        code: "// Code",
        
    }

 }



reappear() {
    
}

disappear() {
      let screen = document.getElementById('_Titelei'); 
      let o = this.props.options;

      if (screen) {
        TweenLite.to(screen, 1, { opacity: 0 });  
        TweenLite.to(screen, 1, { left: '-100%', delay: 1 });  




        if (o.callback) setTimeout(o.callback, 1500);

      }
}



componentWillUnmount() {
    this.animator.stop();
}


componentDidMount() {

    if (this.options.animator) {
        if (Animator) 
            {
            this.animator = new Animator(this.options.animator);    
            store.dispatch({ type: "ACTIVE_ANIMATOR", payload: this.animator }); 
            }
    }
}



  render() {

    return (
        
        <div>


            <div id = "_Titelei" className = "Titelei">
                <div id = "_Title" onClick = { this.disappear.bind(this) } className = "Title">{ this.title }</div>

            </div>
        </div>
    );
  }
}

export default Titelei;