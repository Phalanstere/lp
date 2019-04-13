import React, { Component } from 'react';

import './styles.css';

import GSAP from 'react-gsap-enhancer';
import { TweenLite, TweenMax, CSSPlugin, Power4 } from "gsap";



class PsychoQuestion extends Component {

 constructor(props) {
   super(props);

   this.state = {
     color: 'orange',
   }
 }


 componentDidMount() {
  }

 animateText() {
  
  let node = document.getElementById("Question");

  let x =  this.props.question;
  let s = "";

  for (var i = 0; i < x.length; i++) {
    s += '<span class = "PsyOps">' + x[i] + '</span>';
  }
  
  console.log(this.props);

  global.THING = this.props;
  // TweenMax.staggerTo(node, 5.5, { opacity:0});  
 }


  render() {

    return (
      <div onClick = {this.animateText.bind(this)} id = "Question" className = 'Question'>
        { this.props.question}
      </div>
    );
  }
}

export default PsychoQuestion;