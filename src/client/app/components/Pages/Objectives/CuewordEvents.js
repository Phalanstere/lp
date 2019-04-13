import React, { Component } from 'react';
import TEXT from '../../../components/TEXT';

// definition of the animation object

   var obj = {
     autostart: true,
     interval: 80
   };

   obj.events = [];
        


  var textlist = ['server-client-interaction', 
                  'Wunschmaschine', 
                  "asynchronous Communication", 
                  "Object Oriented Design", 
                  "Software Design Pattern", 
                  "Machine Learning",
                  "Node.js",
                  "Ecma script",
                  "Electron",
                  "Disruption",
                  "Scaling",
                  "Frontend",
                  "Backend",
                  "Sockets",
                  "Digital Leadership",
                  "Encapsulation Logics",
                  "Internet of Things"];




    var tokenlist = ['{', '}', 'switch', 'func', 'Mat.abs']



var e = {
  type: "greensock",
  time: 500,
  opacity: 1,
  div: "quote",
  duration: 2000,
  color: 'white',
  fontSize: '3.6vw',
  textShadow: '0 0 23px gold, 0 0 125px white',
  ease: "Bounce.easeOut",
  text: TEXT.__('Explanation') 
}

  obj.events.push(e);


e = {
  type: "typewriter",
  time: 8000,
  opacity: 1,
  div: "Machinery",
  duration: 12000,
  color: "white",
  fontWeight: 800,
  textShadow: '0 0 2px black',
  text: TEXT.__('Explanation') 
}

  obj.events.push(e);


e = {
  type: "greensock",
  time: 6700,
  div: "quote",
  opacity: 0.01,
  duration: 1000,
}

  obj.events.push(e);


e = {
  type: "greensock",
  time: 21000,
  div: "Machinery",
  opacity: 0.01,
  duration: 3000,
}

  obj.events.push(e);





e = {
      type: "repetitive_greensock_event",	
      no : 30,
      time: 2000,
      interval: 6000,
      irregular: 1000,

      event: {
        type: "greensockArray",
        div: "bubble2",
        time: 2600,
        duration: 1900,
        events: [
          {
            duration: 0,
            newtext: textlist,
            random_left: true,
            random_top: true,
            opacity: 1,
            random_scale: { min: 6, max: 10},
            random_color: ["darkred", 0.2],
            random_rotation: -30,
          },
          {
            duration: 1700,
            random_opacity: { min: 0.2, max: 0.6 },
            random_color: ["gold", 0.2],
            scale: 0.01,
            delay: 0,
            random_left: true,
            random_rotation: 7,
          },
          {
          opacity: 0,
          duration: 500,
          delay: 0
          }
        ],
        "done": false
      }
    }

obj.events.push(e);


// from below
  e = {
      type: "repetitive_greensock_event",	
      no : 30,
      time: 2000,
      interval: 4000,
      irregular: 1000,

      event: {
        type: "greensockArray",
        div: "bubble4",
        time: 2600,
        duration: 1900,
        events: [
          {
            duration: 0,
            newtext: textlist,
            random_left: { min: -20, max: 60, type: "%"},
            random_top:  { min: 100, max: 115, type: "%"},
            opacity: 1,
            random_fontSize: { min: 1, max: 5, type: 'vw' },
            random_scale: { min: 10, max: 20},
            random_color: ["gold", 0.55],
            random_rotation:{ min: -11, max: 11 },
          },
          {
            duration: 1700,
            scale: 0.02,
            delay: 0,
            random_left: { min: 30, max: 44, type: "%"},
            random_top:  { min: 50, max: 66, type: "%"},

            random_rotation: { min: -22, max: -5 },
            random_color: ["black", 0.2],
          },
          {
          opacity: 0,
          duration: 500,
          delay: 0
          }
        ],
        "done": false
      }
    }

obj.events.push(e);




let TitlingOptions = {
  title: '_',
  animator: obj,
  callback: function() {
    alert("Hier ist ein Callback - der getriggert werden soll");
  },
};


export default TitlingOptions;