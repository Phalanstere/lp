import React, { Component } from 'react';
import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import Expandable from  '../../../components/Expandable';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import renderHTML from 'react-render-html';

import '../../../components/Background/background.css';
import './services.css';





const bg = './resources/lp_news.jpeg';
let self = null;

function change ( list ) {
  self.repeat( list );
}


class Services extends Component {

 constructor(props) {
   super(props);
    
    this.exp = [false, false, false, false, false];

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      list: [],
      exp: this.exp

    }

    self = this;
    this.repeat = this.repeat.bind(this);
 }



 repeat( list ) {
    this.setState({
      list: list
    })
 }


  componentDidMount() {    
    this.initTicker();
  }


  select( key, state ) {
    console.log("Der Key ist " + key + "state ist " + state);
    var no = this.exp.length;
    let exp = [];

    for (var i = 0; i< no; i++) {
      if (i === key) {
        console.log(i);
        exp.push(state)
      }
      else exp.push(false);
    }

    this.exp = exp;
    this.setState({
      exp: exp
    })
  }

  renderText() {
    let bio = this.state.TEXT.__('Company');

    let editing = this.state.TEXT.__('ServicesEditing');
    let translation = this.state.TEXT.__('ServicesTranslation');
    let campaign = this.state.TEXT.__('ServicesCampaign');
    let consulting = this.state.TEXT.__('ServicesConsulting');

    let general = this.state.TEXT.__('ServicesGeneral');
    let editingTitle = this.state.TEXT.__('ServicesEditingTitle');
    let translationTitle = this.state.TEXT.__('ServicesTranslationTitle');
    let campaignTitle = this.state.TEXT.__('ServicesCampaignTitle');
    let consultingTitle = this.state.TEXT.__('ServicesConsultingTitle');

    let exp = this.state.exp;
    console.log( "rendering " + exp );

    return(
      <div style={{ fontFamily: 'Oswald'}} className = "InfoTextBody">
        <h1>Services</h1>
        <Expandable ndx={0} onClick={ this.select.bind(this) } title={general} body={ this.state.TEXT.__('PublishingService') } showBody={exp[0]}/>        
        <Expandable ndx={1} onClick={ this.select.bind(this) } title={editingTitle} body={ editing } showBody={exp[1]}/>
        <Expandable ndx={2} onClick={ this.select.bind(this) } title={translationTitle} body={ translation } showBody={exp[2]}/>
        <Expandable ndx={3} onClick={ this.select.bind(this) } title="360°" body={ campaign } showBody={exp[3]}/>
        <Expandable ndx={4} onClick={ this.select.bind(this) } title={consultingTitle} body={ consulting } showBody={exp[4]}/>
      </div>
    );
  }



  initTicker() {
    this.first = [];
    console.log( this.props.language);


    if (this.props.language === "de") {
      console.log("Sprache ist DEUTSCH");
    }
  }


    getServiceText() {
      return this.state.TEXT.__('PublishingService');
    }


  render() {
      let list = [
      './resources/lp-library.jpg',
      './resources/lp-library2.jpg',
      './resources/lp-library4.jpg',
      './resources/lp-library3.jpg',
      './resources/lp-library6.jpg',
      './resources/lp-library7.jpg',
    ];
 

    let first = [
      "Von Büchern in den Zeiten des Internet",
      "Ihr Begleiter im Medienwandel",
      "Übersetzungen - roh oder elaboriert ",
      "Von der Manuskript-Evaluierung bis zum Lektorat",
      "Wie man mit einem Bot kommuniziert ..."
    ];




    if (this.props.language === "en") {
    first = [
      "On Books in the times of the Internet",
      "Your Companion in Media Change",
      "Translations",
      "From manuscript evaluation to proofreading",
      "How to communicate with a bot ..."
    ];
  }
  


  let services = [
    this.state.TEXT.__('PublishingService'),
    "Das ist der Text Nummer 2"
  ];


    return (
        <div className="services">
            <div className="movingSeminarTitle">{ this.state.TEXT.__('PublishingHeader') }</div>
            <Background style={{ webkitFilter: 'saturate(50%)'}} images={ list } in='fade-in' out="fade-out" time={6}/>

            <div className="InfoTextContainer">
              <div>{ this.renderText()}</div>
            </div>

            <div className="newsbar">
              <Ticker style={{ zIndex: 3, color: "white", top: 0, fontSize: '3vw', textShadow: '0 0 10px 10px black'}} inTime={1.3} loop time={6} interval={6} stil={5} 
              list={ first }
              />  
            </div>

        </div>
    );
  }
}

/*
    this.Repeater = new Repeater({ frequency: 4, 
                                   noElements: 100,
                                   noDisplayed: 10,
                                   variation: 2,
                                   onChange: change
                                });
*/

function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(Services);
