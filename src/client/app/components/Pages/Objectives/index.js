import React, { Component } from 'react';
import './styles.css';
import AtomicImage from './AtomicImage.js'

import Titelei from '../../../components/Titelei';
import CuewordEvents from './CuewordEvents.js';
import TEXT from '../../../components/TEXT';

import renderHTML from 'react-render-html';

const bg = './resources/clouds04.jpg';
console.log(bg);


class Objectives extends Component {

 constructor(props) {
   super(props);


    this.dimWidth ='100%';
    this.dimHeight = '100%';

    this.state = {dimensions: {
        width: '100%',
        height: '100%',
    }};

    this.updateDimensions = this.updateDimensions.bind(this);

 }


   onImgLoad({target:img}) {
        
        this.setState({
            dimHeight:img.offsetHeight,
            dimWidth:img.offsetWidth});
        
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
    }
    else
      {
      let h = Math.round(width / this.dimRatio);
      let w = Math.round(width);
      this.bgDimensions = w + 'px ' + h + 'px'; 
      }


    this.setState({
				width: width,
        height: height
			});
  }



    info(img) {
      this.dimWidth = img.offsetWidth;
      this.dimHeight = img.offsetHeight
      this.dimRatio = this.dimWidth/this.dimHeight;
      this.updateDimensions();
    }


  componentDidMount() {
      this.height = window.innerHeight;
      window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    const style = {
        position: 'absolute',
        left: 0,
        top: 52,
        background: 'black',
        backgroundImage: 'url(' + bg + ')',
        backgroundSize: this.bgDimensions,
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: this.state.width,
        height: this.state.height - 52,
        color: 'white',
        overflow: 'hidden'
    }


    return (
      <div id = 'Objectives' style = { style } className = 'Objectives'>
        
    
        <div  id = "textholder">

          <div  id = "Machinery"></div>   
          <div  id = "quote">{ renderHTML( TEXT.__('Eisenhower') ) }</div>    
        </div>

        <div className = "bubble" id = "bubble1">Ziel 1</div>
        <div className = "bubble" id = "bubble2">Ziel 2</div>
        <div className = "bubble" id = "bubble3">Ziel 3</div>
        <div className = "bubble" id = "bubble4">Ziel 4</div>
        <div className = "bubble" id = "bubble5">Ziel 5</div>
        <div className = "bubble" id = "bubble6">Ziel 6</div>


        <AtomicImage src = { bg } parent = { this} />

        <Titelei options = { CuewordEvents } />
      </div>

    );
  }
}

export default Objectives;