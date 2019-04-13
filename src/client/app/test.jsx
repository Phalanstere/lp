import React from 'react';
import ReactDOM from 'react-dom';

import Psychotest from './components/Psychotest'
import './components/Psychotest/styles.css';


import JShell from './components/JShell';

import Titelei from './components/Titelei';



let psycho = [
  {
  question: 'Welche Fremdsprache sprechen Sie?',  
  answer_a: 'Mozartkugel',
  answer_b: 'Handgranate',
  image_a: 'ball.jpg',
  image_b: 'ipod.png',
  comment_a: 'Sie mögen die Kunst, aber doch lieber von einem sicheren Galerieplatz aus.',
  comment_b: 'Sie sind ein wahrer Künstler.'
},
  {
  question: 'Wie nennen Sie Ihren Liebsten?',
  answer_a: 'Hasi',
  answer_b: 'Mausi',
  image_a: 'writer.jpg',
  image_b: 'ladder.jpg',
  comment_a: 'Wären Sie nicht so entschieden gutassehend, könnte man Sie für einen Hausmann halten.',
  comment_b: 'Sie sind ein Draufgänger, der weiß, was er will.'
},

  {
  question: 'Was gefällt Ihnen besser?',
  answer_a: 'Schokolade',
  answer_b: 'Marzipan',
  image_a: 'fish.png',
  image_b: 'ipod.png',
  comment_a: 'Aha, eine lose Kanone sind Sie!',
  comment_b: 'Wer Ihnen sagt, dass Sie ein Leckermaul sind, bekommt ein Problem.'
}]



/******************************* Für das Titling ********************** */
   var obj = {
     autostart: true,
   };

   obj.events = [];
        
        var e = {
        type: "greensock",  
        div: "_Title",     // this  preupposes that a Sample div is existent  
        time: 1000,
        duration: 300,
        color: "green",
        fontSize: '100px',
        letterSpacing: '5px',
        ease: Expo.easeIn
      }; 
      
    
    obj.events.push(e);

    e = {
        type: "greensock",  
        div: "_Titelei",     // this  preupposes that a Sample div is existent  
        time: 3000,
        duration: 2000,
        backgroundColor: 'purple',
      }; 

    obj.events.push(e);



  e = 	{
			type: "typewriter",
			time: 5000,
			text: 'Die Philosophie der Maschine',
			div: "_Title",
			color: "white",
			duration: 2000,
			}; 


  obj.events.push(e);		


  e = 	{
			type: "typewriter",
			time: 8000,
			text: 'Survival Training',
			div: "_Title",
			color: "orange",
      fontSize: '40px',
			duration: 1200,
			}; 


  obj.events.push(e);	




let TitlingOptions = {
  title: 'Digital Survival Training',
  animator: obj,
  callback: function() {
    alert("Hier ist ein Callback - der getriggert werden soll");
  },
}









ReactDOM.render(
  <div>
  <Psychotest reactionTime = {100000} content = {psycho}/>
  <JShell/>

  <Titelei options = {TitlingOptions } />

  </div>,
  document.getElementById('root')
);