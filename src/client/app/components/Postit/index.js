// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './postit.css';

// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} images - list of image URLs to be displayed
*/

class Postit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
		};

	}

	componentDidMount() {
	}


	// if a transform is set, this functions sets the scale manually
	checkTransforms() {
		let style = Object.assign({}, this.props.style);
		if ( style.transform ) {
			if ( this.state.minimized === true ) {
				style.transform += ' scale(0.15)';
			}
			else {
				style.transform += ' scale(1)';
			}
		}
		if ( this.props.color ) {
			switch ( this.props.color ) {
				case 'blue':
					style.webkitFilter = 'hue-rotate(166deg)';
					style.filter = 'hue-rotate(166deg)';
				break;

				case 'green':
					style.webkitFilter = 'hue-rotate(88deg) saturate(70%)';
					style.filter = 'hue-rotate(88deg) saturate(70%)';
				break;

				case 'pink':
					style.webkitFilter = 'hue-rotate(220deg) saturate(70%)';
					style.filter = 'hue-rotate(220deg) saturate(70%)';
				break;

				case 'red':
					style.webkitFilter = 'hue-rotate(290deg) saturate(70%)';
					style.filter = 'hue-rotate(290deg) saturate(70%)';
				break;

				case 'orange':
					style.webkitFilter = 'hue-rotate(320deg) saturate(70%)';
					style.filter = 'hue-rotate(320deg) saturate(70%)';
				break;
			}
		}

		return style;
	}


	trigger() {
		if (this.props.onClick) {
			this.props.onClick();
		}
	}


    render() {
        let style = this.checkTransforms();
        console.log(style);

        return(
            <div onClick={ this.trigger.bind(this) } style={ style } className="Postit">
               <div className="PostitContent">
                  <div className="PostitTitle">
                      { this.props.title }
                  </div>

                  <div className="PostitDate">
                       { this.props.date }
                  </div>

                  <div className="PostitBody">
                      { this.props.body }
                  </div>

                  { this.props.stain ? <div className={'PostitStain'} /> : null }
                </div>
            </div>
        )
    }

}


// PROPERTIES //

Postit.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    style: PropTypes.object,
    date: PropTypes.string,
    stain: PropTypes.bool

};

Postit.defaultProps = {
    title: "Das ist der Titel",
    body: "Das ist der Body",
    date: "Datum",
	onClick() {},
    style: {},
    stain: false
};


// EXPORTS //

export default Postit;