import React, { Component } from 'react';
export default class DynamicIFrame extends Component {


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
      console.log("KLEINER - Neue Höhe " + this.bgDimensions);
      }

    


    this.setState({
				width: width,
                height: height
			});
  }

  render() {  

    const style = {
        position: 'absolute',
        left: 0,
        top: 52,
        fontSize: '10vw',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: this.state.width,
        height: this.state.height - 52,
        color: 'white',
        overflow: 'hidden'
    }


    return (

      <div id = "NIT_Embed" style = { style } >
        <iframe width = { this.state.width } height = { this.state.height } src= { this.props.src } >
        <p>Your browser does not support iframes.</p>
        </iframe>

      </div>

    );
  }
}