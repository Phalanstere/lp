import React, { Component } from 'react';
import './index.css';



class Countdown extends Component {

 constructor(props) {
   super(props);
   this.state = {
     actual_time: 777,
     lasting: 0,
     interval: 100,
     display_time: 0
   }
 }

timeFormat(time) {
  let ms = time % 1000;

  time -= ms;
  time /= 1000;

  if  (ms < 10) { 
    ms = '00' + ms;
  } else
  {
   if (ms < 100) ms = '0' + ms;
  }
  

  let sec = time % 60;
  time -= sec;

  let min = time / 60;


  if (sec < 10) sec = '0' + sec;
  if ( min < 10) min = '0' + min;
  return min + ':' + sec + ":" + ms;
}


// counts the time down 
count() {
  let newtime = new Date().getTime(); 
  newtime = newtime - this.state.start_time;

  let display = null;

  if ( this.props.countdown === true) 
    {
    let temp = this.props.time - newtime;
    display = this.timeFormat(temp);
    }
  else display = this.timeFormat(newtime);



  // console.log(this.state.display_time);

  this.setState({
    actual_time: newtime,
    display_time: display,
    interval: 500
  })

if (this.state.actual_time >= this.state.lasting) {
  this.finalize();
  }  
}



stop() {
  if (this.ival) {
    console.log("Klären des Intervalls");
    clearInterval(this.ival);
    }
else alert("Intervall kann nicht geklärt werden");
}



// clear inrterval and invokes the callback
finalize() {
  clearInterval(this.ival);
  if (this.props.callback) this.props.callback();

  if (this.props.countdown === true) {
      this.setState({
        display_time: '0:00:0000',
        countdown_reset: true
      });

  } else{
      this.setState({
        display_time: 'FINISHED',
        })
  }
}


componentDidMount() {
  console.log("Mount getriggert");



  this.setState({
    start_time: new Date().getTime(),
    lasting: this.props.time,
    actual_time: 0,
    countdown_reset: this.props.reset
  })

  this.ival = setInterval(this.count.bind(this), this.props.interval);
}





 restart() {

  this.setState({
    start_time: new Date().getTime(),
    lasting: this.props.time,
    actual_time: 0,
  });

 this.ival = setInterval(this.count.bind(this), this.props.interval);
 }





  render() {

    return (
      <div id = "Countdown" className='Countdown'>{ this.state.display_time }</div>
    );
  }
}

export default Countdown;