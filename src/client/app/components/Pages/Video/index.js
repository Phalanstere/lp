import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TweenMax } from "gsap";
import YouTube from 'react-youtube';

import {withRouter} from 'react-router';


class Video extends Component {

 constructor(props) {
   super(props);

   this.ratio = 1.777;

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }


  componentWillMount() {
      this.width = window.innerWidth * 0.66;
      this.height = this.width / 1.777;
      // let h = window.innerHeight;
     

  }


  componentDidMount() {
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
  }


  getID(location) {
    let id = location.search.substr(4);
    return id;
  }


  render() {
    const { router, params, location, routes } = this.props;

    let top = this.height / 2;    

    let style = {
        position: 'absolute',
        width: this.width,
        height: this.height,
        margin: 'auto',
        background: 'black',
        left: 0,
        right: 0,
        top: -100,
        bottom: 0   
    }


    // Video Setting
    const opts = {
      height: this.height,
      width: this.width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1,
        showinfo: 0,
        }
    };


    var link = "LINK";


    if (store)
        {
        var state = store.getState();                     
        link = state.actual_video;
        if (! link ) {
            link = this.getID(location);
            }
        }


    return (
        <div 
          ref={(dom) => { this.dom = dom; }}
          className = 'VideoPage' >
            <div style = { style} >
                <YouTube
                    videoId= {link}
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        </div>  
    );
  }
}




function mapStateToProps(state) {
  return {
    store: state
  };

}

export default withRouter( connect(mapStateToProps)(Video) );