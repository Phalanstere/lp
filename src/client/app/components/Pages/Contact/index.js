import React, { Component } from 'react';
import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import Expandable from  '../../../components/Expandable';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DataProtect from './dataprotect';

import './contact.css';

import '../CSS/general.css';
import renderHTML from 'react-render-html';



class Contact extends Component {

 constructor(props) {
   super(props);

   this.exp = [true, false, false];

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      exp: this.exp
    }
 }


  componentDidMount() {
  }

  select( key, state ) {
    var no = 3;
    let exp = [];

    for (var i = 0; i< no; i++) {
      if (i === key) exp.push(state)
      else exp.push(false);
    }
    console.log(exp);

    this.exp = exp;
    this.setState({
      exp: exp
    })
  }

  renderContactField() {
    let exp = this.state.exp;
   let bio ="Information";

   let contact =  this.state.TEXT.__('email'); 

    return(
      <div style={{ fontFamily: 'Oswald'}} className = "InfoTextBody">
        <Expandable ndx={0} onClick={ this.select.bind(this) } title="EMail" body={ contact } showBody={exp[0]}/>
        <Expandable ndx={1} onClick={ this.select.bind(this) } title="Postanschrift" body={ renderHTML(bio) } showBody={exp[1]}/>
        <Expandable ndx={2} onClick={ this.select.bind(this) } title="Newsletter" body={ renderHTML(bio) } showBody={exp[2]}/>
      </div>
    );
  }
 

  render() {

      let list = [
      './resources/lp_contact3.jpg',
      './resources/pencil.jpeg',
      './resources/lp_contact1.jpg',
      './resources/lp_contact2.jpg',
      './resources/lp-library4.jpg',
      './resources/lp-library3.jpg',
      './resources/lp-library6.jpg',
      './resources/lp-library7.jpg',
    ];

    const style = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '13%',
        margin: 'auto',

        fontSize: 'calc(14px + 0.2vw)',
        lineHeight: 'calc(15px + 0.7vw)',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: '40%',
        height: 'auto',
        padding: '3vw',
        paddingBottom: '5vw',
        color: 'black',
        overflow: 'hidden',
        fontFamily: 'Open Sans',
        background: 'white'

    }

    const low = {
      marginTop: '1vw',
      width: "100%",
      fontSize: '1.5vw',
      color: '#337ab7',
      textAlign: 'right',
      paddingRight: '20px'
    }  


    let first = [
      "Mein erster Beitrag",
      "Seminar für Führungskräfte"
    ];


    return (

        <div id = "ContactPage" className="contactBack" >
          <Background style={{ filter: 'saturate(0%)'}} images={ list } in='fade-in' out="fade-out" time={6}/>
          <div className="movingSeminarTitle">
            { this.state.TEXT.__('Contact') }
          </div>

          <div className="InfoTextContainer">
            <div>{ this.renderContactField()}</div>
          </div>

          <div className="dataProtect">
            <DataProtect></DataProtect>  
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

export default connect(mapStateToProps)(Contact);
