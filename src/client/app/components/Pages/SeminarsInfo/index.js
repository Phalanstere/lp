import React, { Component } from 'react';
import Expandable from  '../../../components/Expandable';
import Ticker from  '../../../components/Ticker';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../CSS/general.css';
import renderHTML from 'react-render-html';

import Background from  '../../../components/Background';

import vita_DE from  "html-loader!../../../components/TEXT/SeminarInfo_DE.html";

import '../Services/services.css';




let list = [
  './resources/lp_business2.jpg',  
  './resources/lp_business1.jpg',  
  './resources/lp_learn3.jpg',
  './resources/lp_learn4.jpg',
  './resources/lp_learn7.jpg',
   './resources/lp_business9.jpg',  
];



class SeminarsInfo extends Component {

 constructor(props) {
   super(props);

   this.exp = [false, false, false, false];

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      exp: this.exp
    }
 }





  componentDidMount() {
  }



  select( key, state ) {
    console.log("Der Key ist " + key);
    console.log( "ARRAY " + this.exp); 

    var no = 4;
    let exp = [];

    for (var i = 0; i< no; i++) {
      if (i === key) exp.push(state)
      else exp.push(false);
    }

    this.exp = exp;
    this.setState({
      exp: exp
    })
  }

  renderText() {
    let idea = this.state.TEXT.__('SeminarIdea');
    let format = this.state.TEXT.__('SeminarFormat');
    let location = this.state.TEXT.__('SeminarLocation');
    let portal = this.state.TEXT.__('SeminarPortal');

    let SeminarOrigins = this.state.TEXT.__('SeminarOrigins');
    let how           = this.state.TEXT.__('SeminarHow');
    let portalTitle   = this.state.TEXT.__('SeminarPortalTitle');

    let exp = this.state.exp;
    console.log( "rendering " + exp );

    return(
      <div style={{ fontFamily: 'Oswald'}} className = "InfoTextBody">
        <h1>Digital Survival Lab</h1>
        <Expandable ndx={0} onClick={ this.select.bind(this) } title={SeminarOrigins} body={ idea } showBody={exp[0]}/>
        <Expandable ndx={1} onClick={ this.select.bind(this) } title="Format" body={ format } showBody={exp[1]}/>
        <Expandable ndx={2} onClick={ this.select.bind(this) } title={how} body={ location } showBody={exp[2]}/>
        <Expandable ndx={3} onClick={ this.select.bind(this) } title={portalTitle} body={ portal } showBody={exp[3]}/>
      </div>
    );
  }

  render() {
    let first = [
      "Digital Survival Labs",
      "Seminare für Führungskräfte",
      "Intensiv, interaktiv, interdisziplinär",
      "Ihr Leitfaden durch die digitale Welt",
    ];

    if (this.props.language === 'en') 
    {
      first = [
      "Digital Survival Labs",
      "Seminars for Executives",
      "Intensive, interactive, interdisciplary",
      "Your guide through the digital world",
      ]
    }


    let seminars = this.state.TEXT.__('MovingTitleSeminars');

    return (
      <div className="SeminarInfo" >
          <div className="movingSeminarTitle">{ seminars }</div>
          <Background style={{ filter: 'hue-rotate(-20deg) saturate(50%)' }} images={ list } in='fade-in' out="fade-out" time={6}/>
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




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(SeminarsInfo);
