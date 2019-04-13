// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GSAP from 'react-gsap-enhancer';
import { TweenLite, CSSPlugin} from "gsap";


// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} images - list of image URLs to be displayed
* @property {number} time - duration each background image is displayed (in seconds)
* @property {string} in - entrance effect name (either `fade-in`, `slide-left-in`, and `flip-hor-bottom-in`)
* @property {string} out - exit effect name (either `fade-out`, `slide-right-out`, and `flip-hor-bottom-out`)
* @property {number} inTime - length of the enter effect (in seconds)
* @property {number} outTime - length of the exit effect (in seconds)
* @property {bool} parent - sets the parent divs backgroundColor to transparent, overflow to hidden
*/
class Expandable extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            showBody: this.props.showBody,
		};

        this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
        this.id = "Expandable" + parseInt(Math.random() * 1000 );
	}

    componentDidUpdate() {
        if (this.state.showBody === true) {
           var el = document.getElementById( this.id );
           // TweenLite.to(el, 1, { height: 138 });              
        }
    }

    toggle() {
        let show = !this.props.showBody;
        this.props.onClick( this.props.ndx, show );
    }

    // ternär { this.state.showBody ?  <div className={className}>{ this.props.body}</div> : null }

    render() {
        let className = "ExpandableBody";
        let titleClass = "ExpandableTitle";

        if (this.props.showBody === false) {
            className = "ExpandableBodyOut";
        }
        else titleClass = "ExpandableTitle active";


        return(
            <div>
                <div onClick={ this.toggle } className={ titleClass }>{ this.props.title}</div>
                <div id={ this.id } className={className}>{this.props.body}</div>
            </div>
        )
    }

}


// PROPERTIES //

Expandable.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    showBody: PropTypes.bool,
    onClick: PropTypes.func,
    key: PropTypes.number
};

Expandable.defaultProps = {
    title: "Das ist der Titel",
    body: "Das ist der Body",
    showBody: false,
    ndx: 0,
    onClick() {}

};


// EXPORTS //

export default Expandable;