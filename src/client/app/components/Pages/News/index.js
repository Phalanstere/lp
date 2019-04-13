import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import Postit from  '../../../components/Postit';
import Polaroid from  '../../../components/Polaroid';


import '../../../../resources/animations.css';

import './news.css';


const bg = './resources/lp_postit.png';


class News extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

  console.log("Die Sprache der Seite " + this.props.language); 

 }




  componentDidMount() {
  }

  render() {

    const style = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '13%',
        margin: 'auto',

        fontSize: 'calc(15px + 0.2vw)',
        lineHeight: 'calc(15px + 0.7vw)',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: 'calc(400px + 28vw)',
        height: 'calc(100% - 51px)',
        padding: '3vw',
        paddingBottom: '5vw',
        color: 'black',
        overflow: 'hidden',
        fontFamily: 'Open Sans',
        backgroundColor: 'green'

    }


    const back = {
      backgroundImage: 'url(' + bg + ')'
    }

    const low = {
      marginTop: '1vw',
      width: "100%",
      fontSize: '1.5vw',
      color: '#337ab7',
      textAlign: 'right',
      paddingRight: '20px'
    }  


    let list = [
      './resources/lp_nova3.jpg',
      './resources/lp_nova1.jpg',
      './resources/lp_nova2.jpg',
      './resources/lp_nova4.jpg',
      './resources/lp_app.jpg'
    ];


    let News = {
      width: 600,
      height: 200,
      backgroundColor: 'rgba(255,255,255,0.7)',
      color: "red",
      fontSize: 30,
      padding: 20
    }


    const nova = {
      left: 1200,
      top: 70,
      transform: 'rotate(17deg)',
      backgroundImage: 'url(' + bg + ')'
    }

    let first_DE = [
      "Seminare für Führungskräfte",
      "13.-15.5.2019, Tangoloft Berlin",
      "21-22.6, Northern Institute of Technology, Hamburg",
      "13-14.9, Northern Institute of Technology, Hamburg"
    ];


    let first_EN = [
      "Seminars for Executives",
      "13.-15.6, Tangoloft Berlin",
      "21-22.6, Northern Institute of Technology, Hamburg",
      "13-14.9, Northern Institute of Technology, Hamburg"
    ];



    let upwards_DE = [
      "Ludic Philosophy",
      "Ihr Einstieg in die Digitale Transformation",
      "Das Büro für ungewöhnliche Maßnahmen",
    ];



    let upwards_EN = [
      "Ludic Philosophy",
      "Your Entry into Digital Transformation",
      "The Office for Unusual Measures",
    ];


    let upwards = upwards_DE;
    if (this.state.locale === 'en') upwards = upwards_EN;


    let movingTitle = this.state.TEXT.__('MovingTitleNews');

    return (
        <div className="News" >            
              <Background style={{ filter: 'saturate(20%)'}} images={ list } in='fade-in' out="fade-out" time={6}/>
              <div className="movingTitle">{movingTitle}</div> 


              <Postit style={{ left: 900, top: 900, padding: 100 }} title="Programming" date="13-14.9.2019" 
                body="Das Denken der Programmierer verstehen. Northern Institute of Technology, Hamburg - 13.-14.9. "
                style={ back } />

              <Postit color="blue" title="Startup Yourself!" date="13-15.6.2019" 
                body="Ein Seminar, gemeinsam mit Prof. Avo Schönbohm und Dr. Ivanina Reitenbach, im Tangoloft Berlin"
                style={ nova } />


              <Polaroid style={{ left: 500, top: 220, transform: 'rotate(5.9deg)' }} image="./resources/lp_learn7.jpg" />
              <Polaroid stain style={{ top: 70 }} showPin image="./resources/glasses.jpg" />

              <Polaroid style={{ top: 230, left: '72%', transform: 'rotate(5.9deg)' }} showPin image="./resources/lp_tangoloft_1.jpg" />


             

              <Ticker direction="up" style={{ color: "orange", top: 300, fontSize: 90, }} 
                    time={6} 
                    loop
                    inTime={.7}
                    outTime={2.6}
                    interval={9} still={1.2}
                    list={ upwards } 
              />  


          <div className="newsbar">
            <Ticker style={{ zIndex: 3, color: "white", top: 0, fontSize: '3vw', textShadow: '0 0 10px 10px black'}} inTime={1.3} loop time={6} interval={6} stil={5} 
            list={ first_DE }
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

export default connect(mapStateToProps)(News);
