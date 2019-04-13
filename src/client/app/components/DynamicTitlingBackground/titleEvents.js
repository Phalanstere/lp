import React, { Component } from 'react';

	let myblue = '#003399';



var news = ["_News", "_Kurze Geschichte der Digitalisierung", "_November 2018", "_Penguin Verlag"]


function createNews(list, obj, start) {
  
if (! start) start = 0;

let interval = 1500;


for (var i = 0; i < list.length; i++) {
  let text = list[i];
  let t = (i * interval) + start; 
  let duration = 40 * text.length;


  let e = 	{
			type: "typewriter",
			time: t,
			text: text,
			div: "_Title",
			duration: duration,
      color: "red",
			}; 


  obj.events.push(e);	
  }  
}


   var obj = {
     autostart: true,
   };

   obj.events = [];
        

  var e = {
      type: "greensock",	
      div: "_Title",
      time: 100,
      duration: 300,
      left: '5%',
      top: '76%',
      fontSize: 'calc(30px + 1vw)',
      color: "red"
	} 



  obj.events.push(e);	


  e = {
      type: "greensock",	
      div: "CodingPanel",
      time: 0,
      duration: 0,
      opacity: 0.01
	} 


  obj.events.push(e);	


  e = {
      type: "greensock",	
      div: "CodingPanel",
      time: 100,
      duration: 1700,
      opacity: 1
	} 


  obj.events.push(e);	




  e = {
      type: "greensock",	
      div: "CodingPanel",
      time: 1900,
      duration: 6000,
      webkitFilter: "contrast(1.7)",
      transition: "6s",
      color: "red"
	} 


  obj.events.push(e);	



createNews(news, obj, 1000);


  var e = {
      type: "greensock",	
      div: "_Title",
      time: 11500,
      duration: 600,
      left: '105%',
      top: '76%',
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