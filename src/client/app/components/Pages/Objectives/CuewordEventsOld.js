import React, { Component } from 'react';


  // time = starttime, no = number of events, ev = type of event, list the array that holds ist

 
  function repetitive_events( { time, no, event, interval, list} ) {
    
    for (let i = 0; i < no; i++) {
      var t = time + (i * interval);
      var copy = Object.assign({}, event); 
      copy.time = t;
      list.push (copy);
    }
  }



   var obj = {
     autostart: true,
     interval: 60
   };

   obj.events = [];
        

  var e = {
      type: "repetitive_greensock_event",	
      no : 1,
      time: 2000,
      interval: 500,
      irregular: 900,
      event: {
            type: "random_values",	
            div: 'bubble5',
            values: ['opacity', 'color', 'left', 'top', 'fontSize'],
            time: 1000,
            duration: 0
        },
	} 
  obj.events.push(e);	
/*

  var e = {
      type: "repetitive_greensock_event",	
      no : 100,
      time: 2000,
      interval: 500,
      irregular: 900,
      event: {
            type: "random_values",	
            div: 'bubble3',
            values: ['opacity', 'color', 'left', 'top', 'fontSize'],
            time: 1000,
            duration: 0
        },
	} 
  obj.events.push(e);	


  var e = {
      type: "repetitive_greensock_event",	
      no : 100,
      time: 2000,
      interval: 500,
      irregular: 900,
      event: {
            type: "random_values",	
            div: 'bubble2',
            values: ['opacity', 'color', 'left', 'top', 'fontSize'],
            time: 1000,
            duration: 0
        },
	} 
  obj.events.push(e);	
*/

/*
  var e = {
      type: "repetitive_greensock_event",	
      no : 1,
      time: 2000,
      interval: 4500,
      irregular: 900,
      event: {
            type: "text_bubble",	
            div: 'bubble5',
            textarray: ['Hallo', 'Martin', "Here come's the sun"],
            time: 2000,
            duration: 5600,
            bubble_type: 'ZOOM_OUT',  
            color: 'red',
            letterSpacing: '2px',
            opacity: 0.3,
            fontSize: '50px',
            left: '200px',
            backgroundColor: 'blue',
            random_color: true,
            random_backgroundColor: true,
            random_fontSize: true,
        },
	} 
  obj.events.push(e);	
*/

  var textlist = ['Hallo', 'Martin', "Here come's the sun", "NOVA", "npm", "Object Oriented Design", "Ansage", "Kaugummi"];

  e = {
      type: "repetitive_greensock_event",	
      no : 25,
      time: 2000,
      interval: 3000,
      irregular: 200,

      event: {
        type: "greensockArray",
        div: "bubble2",
        time: 4000,
        duration: 1600,
        events: [
          {
            duration: 0,
            newtext: textlist,
            random_left: true,
            random_top: true,
            random_fontSize: true,
            random_opacity: 1,
            scale: 2,
            random_color: ["gold", 0.9, 'rgba']
          },
          {
            duration: 1000,
            opacity: 0,
            scale: 0.001,
            delay: 0,
            random_left: true,
            random_color: ["darkred", 0.9, 'rgba']
          }
        ],
        "done": false
      }
    }



obj.events.push(e);


e = {
      type: "repetitive_greensock_event",	
      no : 22,
      time: 2000,
      interval: 4000,
      irregular: 1000,

      event: {
        type: "greensockArray",
        div: "bubble3",
        time: 4000,
        duration: 1500,
        events: [
          {
            duration: 0,
            newtext: textlist,
            random_left: true,
            random_top: true,
            random_fontSize: true,
            opacity: 1,
            scale: 2,
            random_color: ["gold", 0.2],
            random_rotation: 80,
          },
          {
            duration: 3000,
            opacity: 0,
            scale: 0.01,
            delay: 0,
            random_left: true,
            letterSpacing: 0,
            random_rotation: -22,
            random_color: ["red", 0.2],
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





/*
  var e = {
      type: "repetitive_greensock_event",	
      no : 32,
      time: 2000,
      interval: 600,
      irregular: 200,
      event: {
          type: "greensock",
          div: "bubble2",
          time: 4000,
          duration: 2400,
          newtext: textlist,
          random_color: true,
          opacity: 0.9,
          random_fontSize: true,
          random_left: true,
          random_top: true,
          done: false

        },
	} 
  obj.events.push(e);


  e = {
      type: "repetitive_greensock_event",	
      no : 55,
      time: 2000,
      interval: 2700,
      irregular: 200,
      event: {
          type: "greensock",
          div: "bubble5",
          time: 4000,
          duration: 2400,
          newtext: textlist,
          random_color: true,
          opacity: 0.9,
          random_fontSize: true,
          random_left: true,
          random_top: true,
          done: false

        },
	} 
  obj.events.push(e);
*/



/*
e = {
  type: "greensockArray",
  div: "bubble2",
  time: 4400,
  duration: 5000,
  desc: "Move Right Left",
  events: [
    {
      duration: 0,
      left: '500px',
      opacity: 0
    },
    {
      duration: 3500,
      opacity: 1,
      delay: 500
    },
    {
      opacity: 0,
      duration: 500,
      delay: 4000
    }
  ],
  done: false
}
*/
  obj.events.push(e);	
/*
  e = {
      type: "random_values",	
      div: ['bubble5', 'bubble2', 'bubble1', 'bubble3'],
      values: ['opacity', 'color', 'left', 'top'],
      time: 3000,
	} 

  obj.events.push(e);


  e = {
      type: "random_values",	
      div: ['bubble5', 'bubble2', 'bubble1', 'bubble3'],
      values: ['opacity', 'color', 'fontSize', 'left', 'top'],
      time: 4000,
	} 

  obj.events.push(e);


  e = {
      type: "random_values",	
      div: ['bubble5', 'bubble2', 'bubble1', 'bubble3'],
      values: ['opacity', 'color', 'left', 'top', 'letterSpacing'],
      time: 5000,
	} 

  obj.events.push(e);




  e = {
      type: "stop_animator",	
      div: "CodingPanel",
      time: 10000,
      duration: 100,
	} 

  obj.events.push(e);	
*/



let TitlingOptions = {
  title: '_',
  animator: obj,
  callback: function() {
    alert("Hier ist ein Callback - der getriggert werden soll");
  },
};


export default TitlingOptions;