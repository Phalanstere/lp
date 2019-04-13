import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MusicVisualizer from  '../../../components/MusicVisualizer';
import Animator from  '../../../components/Animator';

import quotes from './quotes.js';
// import glitch from './glitch';





let bg = './resources/quotes/egg.jpg';

var tss = `1px -1px 0 #767676, 
      -1px 2px 1px #737272, 
      -2px 4px 1px #767474, 
      -3px 6px 1px #787777, 
      -4px 8px 1px #7b7a7a, 
      -5px 10px 1px #7f7d7d, 
      -6px 12px 1px #828181, 
      -7px 14px 1px #868585, 
      -8px 16px 1px #8b8a89, 
      -9px 18px 1px #8f8e8d, 
      -10px 20px 1px #949392, 
      -11px 22px 1px #999897, 
      -12px 24px 1px #9e9c9c, 
      -13px 26px 1px #a3a1a1, 
      -14px 28px 1px #a8a6a6, 
      -15px 30px 1px #adabab, 
      -16px 32px 1px #b2b1b0, 
      -17px 34px 1px #b7b6b5, 
      -18px 36px 1px #bcbbba, 
      -19px 38px 1px #c1bfbf, 
      -20px 40px 1px #c6c4c4, 
      -21px 42px 1px #cbc9c8, 
      -22px 44px 1px #cfcdcd, 
      -23px 46px 1px #d4d2d1, 
      -24px 48px 1px #d8d6d5, 
      -25px 50px 1px #dbdad9, 
      -26px 52px 1px #dfdddc, 
      -27px 54px 1px #e2e0df, 
      -28px 56px 1px #e4e3e2;
  };`


var tsh = "0px 0px 30px white";




class Quotes extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 // this.code =  this.split();
 this.code = quotes;
}


createItems(list, obj, start) {
  
if (! start) start = 0;

let interval = 6500;  // this is obsolte
let last_event = start;





for (var i = 0; i < list.length; i++) {
  let text = list[i];
  let t = last_event; 
  let duration = 50 * text.length;

  last_event += (duration + 6500);

  let e = 	{
			type: "typewriter",
			time: t,
			text: text,
			div: "Statement",
			duration: duration,
            color: "black",
            fontWeight: 600,
            // textShadow: '2px 3px 5px black',
            textShadow: tsh,
            fontSize: '3vw',
            lineHeight: '4.5vw',
			}; 

  obj.events.push(e);	
  }  
}






 componentDidMount() {
   var obj = {
     autostart: true,
   };

   obj.events = [];

  /*
  glitch(document.getElementById("Quotant"), {
      amount: 8,
      complete: function(canvas){
          // do something with the glitched canvas
      }
  });
  */

   this.createItems(this.code, obj, 100);


  let e = 	{
            type: "greensock",
            time: 2000,
            div: "ShadowCode",
			rotation: 720,
            sacle: 3,
            opacity: 0.2,
            transformOrigin: 'left top',
            duration: 640000,
			};
  
   obj.events.push(e);


  let f = 	{
            type: "greensock",
            time: 10,
            div: "Quotant",
            webkitFilter: "sepia(0) contrast(1) brightness(1)",
            duration: 2000,
			};
  
   obj.events.push(f);



  f = 	{
            type: "greensock",
            time: 4000,
            div: "Footer",
            opacity: 1,
            duration: 20000,
			};
  
   obj.events.push(f);



  f = 	{
            type: "greensock",
            time: 500,
            div: "Quotant",
            webkitFilter: "sepia(0.8) contrast(2) brightness(1)",
            duration: 20000,
            // scale: 1.8
			};
  
   obj.events.push(f);


  f = 	{
            type: "greensock",
            time: 30000,
            div: "Quotant",
            webkitFilter: "sepia(0.1) contrast(10) brightness(2)",
            duration: 20000,
			};
  
   obj.events.push(f);








   this.animator = new Animator(obj);    

 }


 componentWillUnmout() {
   this.animator.stop();
 }



  split() {
    let txt = TEXT.__("SourceCode");  
    txt = txt.split(/\n/);
    return txt;
  }


  random() {
      let x = parseInt( Math.random() * this.code.length );
      return this.code[x];
  }

 
  render() {

    var style = {
        opacity: 0.2
    }

    var footer = {
        position: "absolute",
        bottom: "3%",
        width: "100%",
        textAlign: "center",
        fontSize: "1.9vw",
        color: "silver",
        opacity: 0.01

    }



    return (
        <div id className ="SourceCode">
            <img id = "Quotant" src = { bg } />
            <div id = "Statement" className = "BigStatement">
            </div>

            <div style = { style} id = "ShadowCode">
                In the Beginning was the One
            </div>    

            <div style = { footer } id = "Footer">
                Martin Burckhardt / Dirk Höfer: All and Nothing.
            </div>

        </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    state: state
  };

}

export default connect(mapStateToProps)(Quotes);
