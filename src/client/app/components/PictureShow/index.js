import React, { Component } from 'react';
import Animator from '../Animator';


var debug = require('debug')('http');


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


export default class PictureShow extends Component {


  constructor(props) {
    super(props);

    this.time = 20000; // 20 seconds as default

    this.dimWidth ='100%';
    this.dimHeight = '100%';

    this.dimRatio = 1.7;

    this.container = 'DiaContainer';
    if (this.props.container) this.container = this.props.container;


    this.state = {
      interval: 5000,
      duration: 1000,
      dimensions: {
        width: '100%',
        height: '100%',
    }};
    

    this.updateDimensions = this.updateDimensions.bind(this);


  }




  componentWillMount () {
      this.updateDimensions();
    
    }


   create_events() {


     let obj = {
      autostart: true,
    };
    
   obj.events = [];
        

  var e = {
    type: "greensock",
    time: 800,
    div: "dia0",   
    random_left: { min: 0, max: 30, type: "%"},
    duration: 600,
    ease: Expo.easeOut
  }

    obj.events.push(e);


    e = {
    type: "greensock",
    time: 5800,
    div: "dia0",   
    random_left: { min: 220, max: 260, type: "%"},
    duration: 1600,
  }

    obj.events.push(e);

    e = {
    type: "greensock",
    time: 6800,
    div: "dia6",   
    random_left: { min: 10, max: 12, type: "%"},
    duration: 1600,
    ease: Expo.easeOut
  }


    obj.events.push(e);

    e = {
    type: "greensock",
    time: 10800,
    div: "dia6",   
    left: '220%',
    duration: 600,
  }

    obj.events.push(e);


    obj.events.push(e);

    e = {
    type: "greensock",
    time: 10200,
    div: "dia6",   
    random_left: { min: 1, max: 5, type: "%"},
    duration: 1600,
    ease: Expo.easeOut
    }


    obj.events.push(e);


    e = {
    type: "greensock",
    time: 14000,
    div: "dia6",   
    random_left: { min: 210, max: 222, type: "%"},
    duration: 800,
    ease: Expo.easeOut
    }


    obj.events.push(e);


    e = {
    type: "greensock",
    time: 15000,
    div: "dia2",   
    random_left: { min: 0.5, max: 3, type: "%"},
    duration: 800,
    ease: Expo.easeOut
    }


    obj.events.push(e);



   /*
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
   */

   return obj;
  }  
  


 get_time(i, interval) {
  let time = 0;
 
  if (this.props.randomized) {
    let offset = 0;
    let range = interval * this.props.randomized;
    offset = Math.floor(Math.random() * range) - (range*0.5);
    time = (i * this.props.interval) + offset;
    if (time < 0) time = 0;
    return time;
  }
  else return i * this.props.interval;

 }



/*
{ "name": "text_left_to_right_with_stop", 
  "template": 
  { "type": "greensockArray", 
  "div": "Fenster", 
  "time": 2500, 
  "duration": 3500, 
  "events": [ { "duration": 0, "left": "-100%", "color": "blue", "letterSpacing": "-2", "ease": "Bounce.easeIn" }, 
              { "duration": 3500, "left": 100, "color": "orange", "delay": 500 }, 
              { "left": "100%", "delay": 4000 } ], "done": false }, "_id": "Dz9SIB6DUoCkMazK" },

*/


 create_slide_animation() {
   let obj = {
      autostart: true,
      loop: true,
    };
    
   obj.events = [];  

  let list = this.props.list;
   if (this.props.random_sequence) list = shuffle(list); 

   let interval = this.state.interval;
   let duration = this.state.duration;
   
   if (this.props.interval) interval = this.props.interval;
   if (this.props.duration) duration = this.props.duration;

   for (var i = 0; i < list.length; i++) {
    let div   = "dia" + i;
    let time  = this.get_time(i, interval);

    var e = {
      type: "greensockArray",
      div: div,  
      time: time,
      duration: 1200,
      events: [ { duration: 0,
                  display: 'block',
                  left: '-100%',
                  opacity: 1
                },
                {
                  duration: 600,
                  left: '20%',
                  delay: 400,

                },
                {
                delay: 2800,  
                left: '100%',
                duration: 400,
                },
                {
                display: 'none',
                delay: 3200
                }
              ]
      }
    
    obj.events.push(e);


   }

  return obj;
 }




 create_fullscreen_animation() {
   let obj = {
      autostart: true,
      loop: true,
    };
    
   obj.events = [];


   let list = this.props.list;
   if (this.props.random_sequence) list = shuffle(list);

   let interval = this.state.interval;
   let duration = this.state.duration;
   
   if (this.props.interval) interval = this.props.interval;
   if (this.props.duration) duration = this.props.duration;

   for (var i = 0; i < list.length; i++) {
    let div   = "dia" + i;
    let time  = this.get_time(i, interval);

    var e = {
      type: "greensockArray",
      div: div,  
      time: time,
      duration: 1200,
      events: [ { duration: 0,
                  display: 'block',
                  width: '100%',
                  right: 0,
                  margin: 'auto'

                },
                {
                  duration: 600,
                  opacity: 1,
                  delay: 400,

                },
                {
                delay: 2500,  
                duration: 600,
                opacity: 0.01,  
                },
                {
                display: 'none',
                delay: 3200
                }
              ]
      }
    
    obj.events.push(e);
    // console.log("Anzahl Events " + obj.events.length);

    }

 return obj;
 }



 create_fade_animation() {
   let obj = {
      autostart: true,
      loop: true,
    };
    
   obj.events = [];


   let list = this.props.list;
   if (this.props.random_sequence) list = shuffle(list);

   let interval = this.state.interval;
   let duration = this.state.duration;
   
   if (this.props.interval) interval = this.props.interval;
   if (this.props.duration) duration = this.props.duration;

   for (var i = 0; i < list.length; i++) {
    let div   = "dia" + i;
    let time  = this.get_time(i, interval);

    var e = {
      type: "greensockArray",
      div: div,  
      time: time,
      duration: 1200,
      events: [ { duration: 0,
                  display: 'block',
                  left: '20%',
                  margin: '0 auto'

                },
                {
                  duration: 600,
                  opacity: 1,
                  delay: 400,

                },
                {
                delay: 2500,  
                duration: 600,
                opacity: 0.01,  
                },
                {
                display: 'none',
                delay: 3200
                }
              ]
      }
    
    obj.events.push(e);
    // console.log("Anzahl Events " + obj.events.length);

    }

 return obj;
 }




  event_factory () {
    let obj = null;

    switch(this.props.type)
      {
      case "FADE":
        obj = this.create_fade_animation();
      break;  

      case "FULLSCREEN":
        obj = this.create_fullscreen_animation();
      break;


      default: 
        obj = this.create_slide_animation();
      break;
    }
    
  console.log( obj );

  return obj;  
  }





  render_images () {

    // <img src = { item[i] } />
    let list = this.props.list;
    let nlist = [];


    for (var i = 0; i < list.length; i++) {
      let b = list[i];
      let id = "dia" + i;

  
      nlist.push(
        <div key id = { id } key = { i } className = { this.container } >
          <img className = 'diashowImage' src = { b } />
         </div>
        )
      }

     return nlist; 

  }


  componentDidMount() {
    // let options = this.create_events();

    let options = this.event_factory();

    var a = store.getState();
    if (a.active_animator) 
      {
      global.store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 });   
      }

    this.animator = new Animator(options);    
    // registers the animator  
    store.dispatch({ type: "ACTIVE_ANIMATOR", payload: this.animator }); 
    window.addEventListener("resize", this.updateDimensions);
  }


  updateDimensions() {
  }

  render() {  
    let x = this.render_images(); 
    return (

      <div>
        { x }
      </div>

    );
  }
}

