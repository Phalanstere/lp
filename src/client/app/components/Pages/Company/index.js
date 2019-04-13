import React, { Component } from 'react';
import './company.css'

import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import Expandable from  '../../../components/Expandable';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../Services/services.css';




// 
//  
// 'https://c1.staticflickr.com/1/211/493885707_394f4edb6e_z.jpg?zz=1',

  let imageList = [
      './resources/lp_company1.jpg',
      './resources/lp_company2.jpg',
      './resources/lp-library4.jpg',
      './resources/lp_company3.jpg',
      './resources/lp_app.jpg'
    ];


class Company extends Component {

 constructor(props) {
   super(props);

    this.exp = [false, false, false, false, false];

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      exp: this.exp
    }

 }



 
  componentDidMount() { 
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


  getCompanyText() {
    return this.state.TEXT.__('Company');
  }

  renderText() {
    let bio = this.state.TEXT.__('Company');

    let gamification = this.state.TEXT.__('Gamification');
    let education = this.state.TEXT.__('Education');
    let portal = this.state.TEXT.__('Portal');
    let surround = this.state.TEXT.__('RundumService');
    let transmedial = this.state.TEXT.__('Transformation360');

    let companyEducation = this.state.TEXT.__('CompanyEducation');
    let companyBook = this.state.TEXT.__('CompanyBook');

    let exp = this.state.exp;
    console.log( "rendering " + exp );

    return(
      <div style={{ fontFamily: 'Oswald'}} className = "InfoTextBody">
        <h1>Ludic Philosophy</h1>
        <Expandable ndx={0} onClick={ this.select.bind(this) } title="Gamification" body={ gamification } showBody={exp[0]}/>
        <Expandable ndx={1} onClick={ this.select.bind(this) } title={ companyEducation } body={ education } showBody={exp[1]}/>
        <Expandable ndx={2} onClick={ this.select.bind(this) } title="Portal" body={ portal } showBody={exp[2]}/>
        <Expandable ndx={3} onClick={ this.select.bind(this) } title={companyBook} body={ surround } showBody={exp[3]}/>
        <Expandable ndx={4} onClick={ this.select.bind(this) } title="Transmedial / 360°" body={ transmedial } showBody={exp[4]}/>

      </div>
    );
  }



  render() {

    const first = [
      "Ludic Philosophy GmbH & Co.KG",
      "Das Büro für ungewöhnliche Maßnahmen",
      "Schrift - Programmierung",
      "Übersetzungen, quick and dirty oder elaboriert",
      "Von der Mansukript-Evaluierung bis zum Lektorat",
      "Wie man mit einem Bot kommuniziert ..."
    ];


    let company = this.state.TEXT.__('MovingTitleCompany');

    return (
        <div className = "company">
          <div className="movingSeminarTitle">{ company }</div>
          <Background images={ imageList } in='fade-in' out="fade-out" time={6}/>


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
    state: state
  };

}

export default connect(mapStateToProps)(Company);
