// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ticker.css';


// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} list - list of image URLs to be displayed
*/
class Ticker extends Component {
	constructor( props ) {
		super( props );
		this.state = {
            ct: 0
		};
	}

	componentDidMount() {
        var int = this.props.interval * 1000;
        this.interval = setInterval(this.next.bind(this), int);
	}

	componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
	}


    next() {
        if (this.state.ct < this.props.list.length -1) {
            let ct = this.state.ct + 1;
            this.setState({
                ct: ct
            });
        }
        else {
            if (this.props.loop === true) {
                this.setState({
                    ct: 0
                });
            }
            else {
            clearInterval(this.interval)
            }
        }
    }


    getAnimation() {
        let ani = '';

        switch(this.props.direction) {
            case "left":
                ani = 'ticker-slide-in-right ';
                ani += this.props.inTime + 's forwards ease-out';
                ani += ', ticker-slide-out-left ';
                ani += this.props.outTime + 's ' + this.props.still + 's ease-in forwards';
            break;
            
            case "right":
                ani = 'ticker-slide-in-left ';
                ani += this.props.inTime + 's forwards ease-out';
                ani += ', ticker-slide-out-right ';
                ani += this.props.outTime + 's ' + this.props.still + 's ease-in forwards';
            break;

            case "down":
                ani = 'ticker-slide-in-top ';
                ani += this.props.inTime + 's forwards ease-out';
                ani += ', ticker-slide-out-bottom ';
                ani += this.props.outTime + 's ' + this.props.still + 's ease-in forwards';
            break;

            case "up":
                ani = 'ticker-slide-in-bottom ';
                ani += this.props.inTime + 's forwards ease-out';
                ani += ', ticker-slide-out-top ';
                ani += this.props.outTime + 's ' + this.props.still + 's forwards ease-in';
            break;

            case "focus":
                ani = 'ticker-text-focus-in ';
                ani += this.props.inTime + 's forwards';
                ani += ', ticker-text-blur-out ';
                ani += this.props.outTime + 's ' + this.props.still + 's forwards';
            break;

            case "tracking":
                ani = 'ticker-tracking-in-contract-bck ';
                ani += this.props.inTime + 's forwards';
                ani += ', ticker-tracking-out-expand-fwd ';
                ani += this.props.outTime + 's ' + this.props.still + 's forwards';
            break;

            case "swirl":
                ani = 'ticker-swirl-in-fwd ';
                ani += this.props.inTime + 's forwards';
                ani += ', ticker-swirl-out-bck ';
                ani += this.props.outTime + 's ' + this.props.still + 's forwards';
            break;

        }
    return ani;
    }

	render() {
        let ani = this.getAnimation();

        var name = "Ticker";
        if ((this.state.ct % 2) ===1 ) {
            name= "Ticker2";
        }

        let animationStyle = {
            animation: ani
        }

        let obj = Object.assign(animationStyle, this.props.style);
        let key = parseInt( Math.random() *100 );

        return (
            <div key={key} className="Ticker" id={ this.id } style={ obj }>{ this.props.list[this.state.ct] }</div>
        )
    };
}


// PROPERTIES //

Ticker.propTypes = {
	list: PropTypes.arrayOf( PropTypes.string ),
    loop: PropTypes.bool,
    direction: PropTypes.string,
	still: PropTypes.number,
    interval:  PropTypes.number,
	inTime: PropTypes.number,
	outTime: PropTypes.number,
    style: PropTypes.object
};

Ticker.defaultProps = {
	list: [],
    loop: false,
    direction: 'right',
	still: 3,
    interval: 15,
	inTime: .6,
	outTime: 1,
    style: {}
};


// EXPORTS //

export default Ticker;