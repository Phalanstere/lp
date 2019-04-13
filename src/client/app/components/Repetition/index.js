
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
* @property {number} frequency - minimum frequency after which an element is not displayed anymore
* @property {number} timeout - if set the Repeater component will process a setInterval
*
*/


class Repetition extends Component {

 constructor(props) {
   super(props);
   
   this.list = [];
   this.remaining = [];

   this.actual = [];

   this.state = {
    }

 this.loop = this.loop.bind(this);
 }

  componentDidMount() {
    console.log("Repetition gestartet");
    this.createList();
    this.getElements();
    if (this.props.timeout) setInterval(this.loop, this.props.timeout);
  }


  componentWillUnmount() {

  }


  // loop
  loop() {
    this.setElement();
  }



nextElement( actNdx ) {
  var found = false;
  for (var i = 0; i < this.list.length; i++) {
    if (found === false){
      var item = this.list[i];
      if (! this.actual.includes(item.id) && item.ct < this.props.frequency) {
        found = true;
        this.actual[actNdx] = item.id;
        
        if (item.id !== this.list.length-1) {
          this.props.onChange( this.actual )
        }
        else alert("beendet");

      }
    } 
  }
}


// set random element
randomElement(x) {

}


//sets element
setElement( min) {
  var x = parseInt( Math.random() * this.props.noDisplayed );
  let act = this.actual[x];
 
  var actual = this.list[act];
  actual.ct ++;

  if (actual.ct === this.props.frequency) {
    var rd = Math.random();
    /*
    if (rd < this.props.variation / this.props.noDisplayed) {
      this.randomElement(x);
    }
    else this.nextElement(x);
    */
    if (rd < this.props.variation) {
      console.log("Zufallselement");
    }

    this.nextElement(x);
  }

}


  // create list
  createList() {
      for (var i = 0; i < this.props.noElements; i++) {
          var el = {
              ct: 0,
              id: i
          };

      this.list.push(el);   
      this.remaining.push(i); 
    }
    this.initialElements();    
  }



// select element
initialElements() {
    this.actual = [];

    for (var i = 0; i < this.props.noDisplayed; i++) {
        this.actual.push ( this.list[i].id );
        this.remaining.shift();
    }


    console.log( this.actual );
    console.log ( this.remaining)
    this.props.onChange( this.actual );
}



  render() {
    return (
      null 
    );
  }
}




// PROPERTIES //

Repetition.propTypes = {
	frequency: PropTypes.number,
  noElements: PropTypes.number,
  noDisplayed: PropTypes.number,
  timeout: PropTypes.number,
  variation: PropTypes.number,
  onChange: PropTypes.func

};

Repetition.defaultProps = {
  frequency: 3,
  noElements: 100,
  noDisplayed: 4,
  timeout: null,
  variation: 2,
  onChange() {} 
};



export default Repetition;
