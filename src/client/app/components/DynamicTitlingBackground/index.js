import React, { Component } from 'react';
import AtomicImage from './AtomicImage'
import DynamicCode from '../../components/DynamicCode';

import TitlingOptions from './titleEvents.js';
import Titelei from '../../components/Titelei';

const bg = './resources/BurckhardtPortraitGrey.jpg';

export default class DynamicTitlingBackground extends Component {


  constructor(props) {
    super(props);

    this.dimWidth ='100%';
    this.dimHeight = '100%';

    this.state = {dimensions: {
        width: '100%',
        height: '100%',
    }};
    
    this.onImgLoad = this.onImgLoad.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }


   onImgLoad({target:img}) {
        
        this.setState({
            dimHeight:img.offsetHeight,
            dimWidth:img.offsetWidth});
        
    }

    // this function gets the dimension of the hidden background image

    info(img) {
      this.dimWidth = img.offsetWidth;
      this.dimHeight = img.offsetHeight
      this.dimRatio = this.dimWidth/this.dimHeight;

      console.log("Ratio " + this.dimRatio);

      this.updateDimensions();
    }

  componentWillMount () {
      this.updateDimensions();
    }


  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }


  updateDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    this.ratio = width / height;
    if (this.ratio < this.dimRatio)
      {
      let h = Math.round(height - 52);
      let w = Math.round(height * this.dimRatio);
      this.bgDimensions = w + 'px ' + h + 'px'; 
      console.log("KLEINER - Neue Höhe " + this.bgDimensions);
    }
    else
      {
      let h = Math.round(width / this.dimRatio);
      let w = Math.round(width);
      this.bgDimensions = w + 'px ' + h + 'px'; 
      console.log("KLEINER - Neue Höhe " + this.bgDimensions);
      }

    


    this.setState({
				width: width,
        height: height
			});
  }

  render() {  

    // const bgDimensions = this.state.width + 'px ' + this.state.height + 'px'; 


    const style = {
        position: 'absolute',
        left: 0,
        top: 52,
        background: 'black',
        backgroundImage: 'url(' + bg + ')',
        backgroundSize: this.bgDimensions,
        backgroundPosition: 'center',
        opacity: 0,
        width: this.state.width,
        height: this.state.height - 52,
        color: 'white',
        overflow: 'hidden'
    }






    return (

      <div id = "CodingPanel" style = { style } >
        <AtomicImage src = { bg } parent = { this} />

        <Titelei options = {TitlingOptions } />

        <div id = "credits">
          Web-Design Ludic Philosophy
        </div>
      </div>

    );
  }
}