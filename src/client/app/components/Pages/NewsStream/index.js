import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from  '../../../components/Background';

import '../../../../resources/animations.css';

import './news-stream.css';

var tt = require('twitter-timeline');



class NewsStream extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }
 }




  componentDidMount() {
  }

  render() {

    let list = [
      './resources/lp_nova3.jpg',
      './resources/lp_nova1.jpg',
      './resources/lp_nova2.jpg',
      './resources/lp_nova4.jpg',
      './resources/lp_app.jpg'
    ];

    let movingTitle = this.state.TEXT.__('News Stream');

    let ns1 = this.state.TEXT.__('NewsStream1');
    let ns2 = this.state.TEXT.__('NewsStream2');
    let ns3 = this.state.TEXT.__('NewsStream3');



    return (
        <div className="NewsStream" > 
            <div className="movingTitle">{movingTitle}</div> 
            <Background style={{ filter: 'sepia(20%)'}} images={ list } in='fade-in' out="fade-out" time={9}/>           
            <div className ="NewsStreamText">
              <p>{ns1}</p>
              <p>{ns2}</p>
              <p>{ns3}</p>
            </div>
        </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(NewsStream);
