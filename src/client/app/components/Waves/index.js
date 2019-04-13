import React, { Component } from 'react';
import Wave from './wave.js';


var file = './resources/Number.mp3';

'use strict';

class Waves extends Component {

 constructor(props) {
   super(props);
 }




  render() {

    return (
        <div>
            Hier kommt ein Problem mit dem Canvas
            <canvas></canvas>
        </div>
    );
  }
}

export default Waves;