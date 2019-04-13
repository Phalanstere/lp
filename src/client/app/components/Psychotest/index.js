import React, { Component } from 'react';

import GSAP from 'react-gsap-enhancer';


// import './styles.css';
import PsychoQuestion from './psychotest_question';
import PsychoOption from './psychotest_option';




class Psychotest extends Component {

 constructor(props) {
   super(props);

   this.finished = false;
   this.result = "";

   if (this.props.reactionTime) this.reactionTime = this.props.reactionTime;
   else this.reactionTime = 25000;


   this.state = {
     finished: false,
     color: 'orange',
     ndx: 0,
     display: 'none',
     assessment: {
        answers:  [],
        info: 'Information'
     },
   }
 }


 start() {
  var s = document.getElementById("Psychotest");
  if (s) {
    this.invisible.display = 'block';
    alert(this.invisible.display);

    this.setState( {} ); 
    }
 }


 get_result() {
    let res = this.state.assessment.answers;
    let str = "";


    for (var i = 0; i < res.length; i++) {
      str +=  res[i].interpretation;
      str += " ";
    }

 return str;
 }


 show_result() {
    this.result = this.get_result();

    this.setState( { finished: true} ); 
 }



  render() {

    const styleObj = {
      position: 'fixed',
      color: 'green',
      fontFamily: 'OpenSans',
      background: this.state.color,
      fontSize: 123,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      marginBottom: 0,
      zIndex: 100,
      textAlign: 'center'
    };


    this.invisible = {
      display: 'none',
    }

    let CountdownStyle = {
      fontSize: 55,
      color: 'red'
    }


    if (this.state.finished === false) {

    return (

      <div>
        <div className = "PsychotestStart" onClick = {this.start.bind(this)}>Start Psychotest</div>

        <div id = "Psychotest" className = 'Psychotest'>    
          <PsychoQuestion className = 'Question' question = {this.props.content[this.state.ndx].question} />
          <PsychoOption time = { this.reactionTime }  parent = {this} content = {this.props.content[this.state.ndx]} assessment = {this.state.assessment} />
        </div>
      </div>
    );

  }
  else {

    return (
      <div className = "Psychotest">
        <div className = "PsychotestResult">{ this.result }</div>
     </div>

    )

  
  }
  

  }
}

export default Psychotest;