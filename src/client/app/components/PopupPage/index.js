// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './popup.css';
const bg = './resources/Astronaut.jpg';
const pin = './resources/lp_postit_pin.png';

// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} images - list of image URLs to be displayed
*/

class PopupPage extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            closing: false,
            visible: this.props.visible
		};

        this.setInvisible = this.setInvisible.bind(this);
	}


	componentDidMount() {
	}

  
    close() {
        var self = this;

        this.setState({
            closing: true,
        });
    
        setTimeout( self.setInvisible, 1000)
    }

    setInvisible() {
        if (this.props.callback) {
            this.props.callback();
        }
    }
    

    renderPopup()  {
        var style = {
            backgroundImage: 'url(./resources/lp_smartphone.png)',
            backgroundSize: 'auto 100%'
        }

        let page = "popup-page";
        if (this.state.closing === true) page = "popup-page popup-closing";
        
        return(
            <div style={ this.props.style } className={ page }>
               <div onClick={ this.close.bind(this) } className="popup-exit">✕</div>
               {this.props.children}
            </div>
        )
    }


    render() {
        return(
            <div>
            {this.renderPopup() }
            </div>
        );
    }

}


// PROPERTIES //

PopupPage.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    image: PropTypes.string,
    filter: PropTypes.string,
    showPin: PropTypes.bool,
    stain: PropTypes.bool,
    onClick: PropTypes.func,
    id: PropTypes.number,
    callback: PropTypes.func

};

PopupPage.defaultProps = {
    title: null,
    image: null,
    filter: null,
    showPin: false,
    style: {},
    stain: false,
    id: null,
    onClick: null,
    callback: null
};


// EXPORTS //

export default PopupPage;
