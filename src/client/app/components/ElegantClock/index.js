/*
Die Komponente ist noch ziemlich vorläufig
*
*/


import React, { Component } from 'react';
import './index.css';


import Digit from './digit';
import TimeFormat from './timeFormat';

import NotificationSystem from 'react-notification-system';

class ElegantClock extends Component {

 constructor(props) {
   super(props);
   this.state = {
     actual_time: 777,
     lasting: 0,
     interval: 100,
     display_time: 0,
     seconds_ones: 1,
     second_tens: 0,
     minute_ones: 1,
     minute_tens: 0
   }

   this.countdown = true;
 }



notify() {
    event.preventDefault();
    this._notificationSystem.addNotification({
      title: 'THIS IS A NOTE',
      message: 'You have clicked something',
      level: 'success',
      position: 'br'
    });
}


timeFormat(time) {
    // TimeFormat(time);
    
    let ms = time % 1000;
    time -= ms;
    time /= 1000;
    

    let sec = time % 60;
    let minutes = (time - sec) / 60;


    // jetzt sind die Sekunden übrig
    let ones = sec % 10;
    sec -= ones;
    sec /= 10;

    let minute_ones = minutes % 10;



    let minute_tens = (minutes - minute_ones) / 60;





  this.setState({
    minute_ones: minute_ones,
    minute_tens: minute_tens,
    second_tens: sec,
    second_ones: ones
  })


    return time;
}


count() {
  let newtime = new Date().getTime(); 
  newtime = newtime - this.state.start_time;

  let display = null;

  if ( this.countdown === true) 
    {
    let temp = this.props.time - newtime;
    this.timeFormat(temp);
    }
  else 
    {
    this.timeFormat(newtime); 
    }


}


componentDidMount() {
  this._notificationSystem = this.refs.notificationSystem;



  this.setState({
    start_time: new Date().getTime(),
    lasting: this.props.time,
    actual_time: 0,

  })

  this.ival = setInterval(this.count.bind(this), 1000);
}




  render() {

    return (
      <div>  
        <div id = "ElegantClock" className = "ElegantClock">
            <div className = "Note" onClick = { this.notify.bind(this) } >Notify</div>

            <Digit unit = "minute_ones" token = {this.state.minute_ones}></Digit>
            <Digit unit = "second_tens" token = { this.state.second_tens }></Digit>
            <Digit unit = "second_ones" token = { this.state.second_ones }></Digit>


        </div>
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}

export default ElegantClock;