import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from  '../../../components/Background';

import '../../../../resources/animations.css';

import './news-stream.css';

import { Timeline } from 'react-twitter-widgets'



class NewsStream extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      screenName: 'high_fly2026',
      userName: 'HighFrequency',
      initalized: false
    }
 }



  renderTwitter(no) {
    return(
      <div className="TwitterStream">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: this.state.screenName
          }}
          options={{
            username: this.state.userName,
            height: '100%'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    );
  }

  triggerTwitterAccount(key) {
    let screenName;
    let userName;

    switch(key) {
      case 0:
        screenName = "DigitalSurviva1";
        userName="DigitalSurvival";
      break;

      case 1:
       screenName = "Personality2026";
       userName="PersonalityHunter";
      break;

      case 2:
        screenName = "doITnow91";
        userName="JustDoIT";
      break;

      case 3:
        screenName = "high_fly2026";
        userName="HighFrequency";
      break;
    }

    this.setState({
      screenName: screenName,
      userName: userName,
      initalized: true
    })
  }


  renderOptions() {
    let hr =  this.state.TEXT.__('bot_hr');
    let blockchain =  this.state.TEXT.__('bot_blockchain');
    let medicine =  this.state.TEXT.__('bot_medicine');


    return(
      <div className="BotOptions">
          <div onClick={ this.triggerTwitterAccount.bind(this, 1) } key={1} className="BotOptionsChoice">
            <img className="ns-icon" src = './resources/noun_people.svg' />
            {hr}</div>
          <div onClick={ this.triggerTwitterAccount.bind(this, 3) } key={2} className="BotOptionsChoice">
            <img className="ns-icon" src = './resources/noun_bitcoin.svg' />
            {blockchain}</div>
          <div onClick={ this.triggerTwitterAccount.bind(this, 2) } key={3} className="BotOptionsChoice">
            <img className="ns-icon" src = './resources/noun_medicine.svg' />
            {medicine}</div>
      </div>
    );
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
            { this.renderOptions() }
            { this.state.initalized ? this.renderTwitter() : null } 
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
