// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './polaroid.css';
const bg = './resources/Astronaut.jpg';
const pin = './resources/lp_postit_pin.png';

// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} images - list of image URLs to be displayed
*/

class Polaroid extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            height: '100%',
            width: 'auto',
            touched: false
		};

        this.touch = this.touch.bind(this);
        this.untouch = this.untouch.bind(this);
	}


	componentDidMount() {
        var self = this;

        if (this.props.image) {
            var image = new Image();
            image.src = this.props.image;
            image.onload = function () {
                if (this.height > this.width) {
                   self.setFormat("high");
                }
                else self.setFormat("wide");
            };
        }
	}


    setFormat(type) {
        let width = '100%';
        let height = 'auto';

        if (type === "wide") {
            width = 'auto';
            height = '100%';
        }

        this.setState({
            width: width,
            height: height
        });
    }


    trigger() {
        if (this.props.onClick !== null) {
            this.props.onClick.call(this, this.props.id );
        }
    }


	touch() {
        console.log("touch");
		this.setState({
			touched: true
		});
	}

	untouch() {
        console.log("untouch");
		this.setState({
			touched: false
		});
	}

  

    render() {
        let format = this.state.width + ' ' + this.state.height;

        const background = {
            backgroundImage: 'url(' + this.props.image + ')',
            backgroundSize: format,
            backgroundPosition: 'center'
        };

        
        let polaroid = 'Polaroid';
		if (this.state.touched === true) {
			polaroid = 'Polaroid polaroid-touched';
		}

        // <img width={ this.state.width } height={ this.state.height } src= { this.props.image } />

        return(
            <div style={ this.props.style } className={ polaroid }>
                { this.props.stain ? <div className={'PolaroidStain'} /> : null }
                <div onClick={ this.trigger.bind(this) } onMouseOver={this.touch} onMouseOut={this.untouch} 
                     style={background} className="PolaroidImage">
                </div>
                { this.props.showPin ?  <div className={"PolaroidPin"} /> : null }
                { this.props.title ?  <div className={"PolaroidTitle"}>{ this.props.title }</div> : null }
            </div>
        )
    }

}


// PROPERTIES //

Polaroid.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    image: PropTypes.string,
    filter: PropTypes.string,
    showPin: PropTypes.bool,
    stain: PropTypes.bool,
    onClick: PropTypes.func,
    id: PropTypes.number

};

Polaroid.defaultProps = {
    title: null,
    image: null,
    filter: null,
    showPin: false,
    style: {},
    stain: false,
    id: null,
    onClick: null
};


// EXPORTS //

export default Polaroid;