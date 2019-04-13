import React, { Component } from 'react';
export default class DynamicPage extends Component {


  constructor(props) {
    super(props);

    this.dimWidth ='100%';
    this.dimHeight = '100%';

    this.dimRatio = 1.7;

    this.state = {dimensions: {
        width: '100%',
        height: '100%',
    }};
    
    this.updateDimensions = this.updateDimensions.bind(this);
    if (this.props.backgroundImage) console.log("Hintergrundsbild");

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
    }
    else
      {
      let h = Math.round(width / this.dimRatio);
      let w = Math.round(width);
      this.bgDimensions = w + 'px ' + h + 'px'; 
      
      }

    console.log( this.bgDimensions );


    this.setState({
				width: width,
        height: height
			});
  }

  render() {  

    let style;

    if (this.props.backgroundImage) style = {
        position: 'absolute',
        left: 0,
        top: 52,
        fontSize: '10vw',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: this.state.width,
        height: this.state.height - 52,
        color: 'white',
        overflow: 'hidden',
        backgroundImage: 'url(' + this.props.backgroundImage + ')',
        backgroundSize: this.bgDimensions,

      }

     else style = {
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

    let id = "DynamicPage" + new Date().getTime();
    if (this.props.id) id = this.props.id;


    return (

      <div id = { id } style = { style } >
            <div>{ this.props.children }</div>
      </div>

    );
  }
}