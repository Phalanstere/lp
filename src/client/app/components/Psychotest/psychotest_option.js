import React, { Component } from 'react';
// import GSAP from 'react-gsap-enhancer';
// import { TweenLite, TweenMax, CSSPlugin, Power4 } from "gsap";

import { TweenLite, TweenMax, CSSPlugin, Power4 } from "gsap";



import './styles.css';

import Countdown from '../Countdown'
import ElegantClock from '../ElegantClock'



class PsychotestOption extends Component {

 constructor(props) {
   super(props);

   this.finished = false;

    if (this.props.time) this.reaction = this.props.time;
    else                 this.reaction = 50000;


   this.state = {
     color: 'orange',
     countdown_reset: false,
   }
 }


 componentDidMount() {


  }




 over () { 
  // console.log( this.props.assessment.answers);
 this.countdown.stop();
  console.log("Psychotest ist bewältigt");
 }

 next_question() {
  let index = this.props.parent.state.ndx +1;
  


    this.props.parent.setState({
      ndx: index,
      countdown_reset: true
      })


 }


 next () {
    this.next_question();
    this.countdown.restart();   
 }


 progress () {
  let index = this.props.parent.state.ndx +1;

  if (index < this.props.parent.props.content.length) {

    this.moveOut(); 
    setTimeout(this.next.bind(this), 1200);
    // this.next_question();
    // this.countdown.restart();
  }  
 else 
  {
  this.finished = true;
  this.over();  

  let left = document.getElementById('LEFT');  
  let right = document.getElementById('RIGHT');  


  TweenLite.to(left, 1, { x: -400, opacity: 0.1, ease: Power4.easeOut });   
  TweenLite.to(right, 1, { x: +400, ease: Power4.easeOut }); 

  this.props.parent.show_result();
  // setTimeout(this.props.parent.show_result.bind(this), 1200);

  }
 }


 chooseA () {
 if (this.finished === false)  
  {
  let cont = this.props.content;

  this.props.assessment.answers.push( {
    option: 0,
    interpretation: cont.comment_a
    });

  this.progress();

  } 

 }

 chooseB () {
  if (this.finished === false)  
    {
    let cont = this.props.content;
    this.props.assessment.answers.push( {
    option: 1,
    interpretation: cont.comment_b
    });

    this.progress();
    } 
 }


 titlingOut () {
  let title = document.getElementById('Question');  
  TweenLite.to(title, 1, { y: -400, opacity: 0.5, ease: Power4.easeOut });  
 }



 moveOut() {
  let left = document.getElementById('LEFT');  
  let right = document.getElementById('RIGHT');  

  TweenLite.to(left, 1, { x: -600, opacity: 0.1, ease: Power4.easeOut });   
  TweenLite.to(right, 1, { x: +600, ease: Power4.easeOut }); 


  let cd = document.getElementById('Countdown');  
  TweenLite.to(cd, 1, { y: +400, ease: Power4.easeOut }); 

  this.titlingOut();
  setTimeout(this.moveIn, 1200);
 }


 moveIn() {
  let left = document.getElementById('LEFT');  
  let right = document.getElementById('RIGHT');  

  TweenLite.to(left, 1, { x: 0, opacity: 1, ease: Power4.easeOut });   
  TweenLite.to(right, 1, { x: 0, opacity: 1, ease: Power4.easeOut }); 
  
  let title = document.getElementById('Question');  
  TweenLite.to(title, 1, { y: 0, opacity: 1, ease: Power4.easeOut }, 100); 


  let cd = document.getElementById('Countdown');  
  TweenLite.to(cd, 0.4, { y: 0, opacity: 1, ease: Power4.easeOut }, 100);

 }



 timeout() {
  this.countdown.restart();
  this.next_question();
  this.moveOut();

 }




 testfall() {
  let node = document.getElementById('LEFT');  
  // TweenLite.to(node, 1, { x: -400, ease: Power4.easeInOut });
 }




  render() {

    let cont = this.props.content;

    let path = './app/resources/';

    let link = 'http://i.ebayimg.com/images/g/WdcAAOSweW5U5JjW/s-l300.jpg';

    let image_a = path + cont.image_a;
    let image_b = path + cont.image_b;

    console.log(cont);






    if (this.finished === false)
    {
    return (
      <div>
        <div id = "LEFT" onMouseOver = { this.testfall.bind(this)}  className = 'OptionA' onClick = { this.chooseA.bind(this)} >  
          <img className = 'DynImage' src = { image_b } />
          <span className = 'Formulation'>{ cont.answer_a }</span>    
        </div>
        <div id = "RIGHT" className = 'OptionB' onClick = { this.chooseB.bind(this)}>
          <img className = 'DynImage' src = { image_a } />
          <span className = 'Formulation'>{ cont.answer_b }</span>      
        </div>
      
      <Countdown ref= {(countdown) => { this.countdown = countdown; }} time = { this.reaction } interval = { 100 }  callback = { this.timeout.bind(this) } countdown = { true }  reset = { this.state.countdown_reset} />

      <ElegantClock time = {1520000} />

      </div>
      );
    }
  }
}



// export default GSAP()(PsychotestOption)
export default PsychotestOption