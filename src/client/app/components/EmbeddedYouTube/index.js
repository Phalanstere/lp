import React, { Component } from 'react';
import PropTypes from 'prop-types';



class EmbeddedYouTube extends Component {

 constructor(props) {
   super(props);

    this.id = "Embedded" + parseInt( Math.random() * 1000 );

    this.state = {
        visible: props.auto
    }

 }




  componentDidMount() {
    let el = document.getElementById(this.id);
    var width = el.clientWidth;
    var height = el.clientHeight;

    this.setState({
        width: width,
        height: height
    })

  }

 

  startVideo() {

  }


  renderVideo() {
   
    var src="https://www.youtube.com/embed/Tw5tbhn1itA?modestbranding=1";
    if (this.state.videoStart === true) src = "https://www.youtube.com/embed/Tw5tbhn1itA?autoplay=1&showinfo=0&modestbranding=1&fs=1";
    return (
        <div onMouseOver={ this.startVideo.bind(this) } className="">
          {this.state.videoStart ?  null: <div className="videoOverlay" /> }
          <iframe allowfullscreen="allowfullscreen" width="560" height="315" src={ src } frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
        </div>
    )
  }


  trigger() {
      var v = ! this.state.visible;
      this.setState({
          visible: v
      })

      if (v === true) {
      }
  }


  getLinkAddress() {
     var body = 'https://www.youtube.com/embed/';
     body += this.props.link;
     body += '?autoplay=1&showinfo=0&modestbranding=1&fs=1';
     return body;
  }

  renderOverlay() {
    let src = this.getLinkAddress();

    return(
            <div className="OverlayVideoScreen">
                <div className="OverlayVideo">
                    <iframe allowfullscreen="allowfullscreen" width="1280" height="720" src={ src } frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div> 
      );
  }


  render() {
    let imageStyle = {
        width: 400,
        height: 'auto'
    }

    return (
        <div onClick={ this.trigger.bind(this) } className="SeminarPageVideo" title={ this.props.title } id = { this.id }>    
            { this.state.visible ?  this.renderOverlay() : null }
            { this.props.image ? <img width={200} src={ this.props.image } /> : null }
        </div>
    );
  }
}




// PROPERTIES //

EmbeddedYouTube.propTypes = {
    image: PropTypes.string,
	link: PropTypes.string,
    title: PropTypes.string,
    auto: PropTypes.bool

};

EmbeddedYouTube.defaultProps = {
    auto: false,
    image: null,
    link: 'https://www.youtube.com/embed/Tw5tbhn1itA?autoplay=1&showinfo=0&modestbranding=1&fs=1',
    title: "watch trailer"
};



export default EmbeddedYouTube;
