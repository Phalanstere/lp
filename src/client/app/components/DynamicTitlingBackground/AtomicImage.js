import React, { Component } from 'react';

export default class AtomicImage  extends Component {
   constructor(props) {
        super(props);
        this.state = {dimensions: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {
        console.log ( img.offsetHeight);
        this.setState({dimensions:{height:img.offsetHeight,
                                   width:img.offsetWidth}});

        this.props.parent.info( img);
    }
    render(){
        const blind = {
            left: window.innerHeight,
            opacity: 0
        }

        const {src} = this.props;
        const {width, height} = this.state.dimensions;

        return (<div style = { blind } >
                <img onLoad={this.onImgLoad} src={src}/>
                </div>
               );
    }
}