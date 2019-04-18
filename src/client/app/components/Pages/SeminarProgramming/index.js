import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from  '../../../components/Background';
import ShapedForm from  '../../../components/ShapedForm';
import Typewriter from  '../../../components/Typewriter';

import Seal from  '../../../components/Seal';


import Expandable from  '../../../components/Expandable';
import renderHTML from 'react-render-html';

import EmbeddedYouTube from  '../../../components/EmbeddedYouTube';


import './sp.css';
import '../../../../resources/animations.css';





class SeminarProgramming extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      videoStart: false,
      leader: false,
      program: false
    }

  this.triggerVideo = this.triggerVideo.bind(this);
  this.triggerProgram = this.triggerProgram.bind(this);
  this.triggerLeader = this.triggerLeader.bind(this);

  console.log("Die Sprache der Seite " + this.props.language); 

 }




  componentDidMount() {
  }


  renderLeader() {
    let burckhardt = this.state.TEXT.__('Burckhardt1');

    return (
      <div className="SeminarProgrammierungLeader">
        <div className="SeminarProgrammierungPortrait">
          <img src = "./resources/lp_Burckhardt2.png" />
        </div>
        <div className="SeminarProgrammierungInfo">Dr. Martin Burckhardt

          <div className="PersonInfo">
            { burckhardt }
          </div>

        </div>

      </div>
    );
  }


  triggerVideo() {
    this.setState({
      videoStart: true
    })
  }

  triggerLeader() {

    this.setState({
      leader: true,
      program: false,
      videoStart: false
    })
  }

  triggerProgram() {
    this.setState({
      program: true,
      leader: false,
      videoStart: false
    })
  }


  renderSeal() {
    return (
          <div>

          <Seal 
          style={{fontFamily: 'Oswald', 
          position: 'absolute',
          left: 20,
          top: 120,
          color: 'white',
          float: 'left',
          background: 'linear-gradient(to right, silver, darkslategray, black, silver)',
          transform: 'rotate(-30deg)',
          cursor: 'pointer',
          marginRight: 40,
          boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px gainsboro, 0 0 20px gainsboro, 0 0 25px ivory, 0 0 40px #e60073, 0 0 55px white',
          marginBottom: 30}}

          innerStyle={{
            backgroundImage: 'url(./resources/lp_code01.jpg)',
            backgroundSize: 'auto 100%'
          }}

          activationMode
          upperArc={ 70 } 
          lowerArc={70} 
          title="13.-14.9.2019"          
          lower="Anmeldung" 
          noOrnaments
          scale={.72}
          upper="Hamburg"
          onClick={() => {
            window.open('https://www.nithh.de/de/thinktank/denke-der-it-ler-verstehen/', '_blank');
          }}
      />

      <Seal 
          style={{fontFamily: 'Oswald', 
          position: 'absolute',
          left: 260,
          top: 140,
          color: 'white',
          float: 'left',
          background: 'linear-gradient(to right, silver, darkslategray, black, silver)',
          transform: 'rotate(9deg)',
          cursor: 'pointer',
          marginRight: 40,
          boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px gainsboro, 0 0 20px gainsboro, 0 0 25px ivory, 0 0 40px #e60073, 0 0 55px white',
          marginBottom: 30}}

          innerStyle={{
            backgroundImage: 'url(./resources/lp_code01.jpg)',
            backgroundSize: 'auto 100%'
          }}

          activationMode
          upperArc={ 70 } 
          lowerArc={70} 
          title="21.-22.5.2019"          
          lower="Anmeldung" 
          noOrnaments
          scale={.8}
          upper="Hamburg"
          onClick={() => {
            window.open('https://www.nithh.de/de/thinktank/denke-der-it-ler-verstehen/', '_blank');
          }}
      />

      </div>

    )

  }


  renderProgram() {
    return(
      <div className="SeminarProgrammierungLeader">
        Hier kommt das Programm
      </div>
    );
  }


  renderDescription() {
    var desc = 'Das Seminar führt über ein Wochenende in die Grundlagen moderner, objektorientierter Programmierung ein. Als Basis dient JavaScript, das in Gestalt von Node.js im letzten Jahrzehnt zur lingua franca des Internets geworden ist. Die Teilnehmer lernen, was Variablen sind, was es mit der Typisierung auf sich hat, welche Kontrollstrukturen es gibt, wie man mit Arrays arbeitet, Objekte definiert und APIs einbettet. Kurzum: sie erleben einen Crashkurs in Programmierung, von dem aus sie mit einem gesunden Basiswissen in die Materie einsteigen können. Der eigentliche Mehrwert aber ist, dass das Seminar die Teilnehmer befähigt, mit Programmierern und IT-Spezialisten auf satisfaktionsfähige Weise zu kommunizieren.';
    return (
        <div>
            <div className="SeminarProgramming">
                <div style={{   height: 800, 
                                textShadow: '0 0 4px white',
                                width: '40vw', fontSize: '1vw', transform: 'rotate(-23deg) skew(-30deg, 15deg)'}}>
                <Typewriter
                    delay={1000}
                    random
                    interval={20}
                    style={{ 
                        color:"white",
                        textShadow: '0 0 4px silver',   
                        fontFamily:"Open Sans", 
                        fontSize: 'calc(1.2vw + 8px)'}}
                    text={desc} /> 
                 </div>   
            </div>
            <div className="SeminarProgrammierungLeft" >
                <div onClick={ this.triggerVideo } className="SeminarProgrammierungItem">Trailer</div>
                <div onClick={ this.triggerLeader } className="SeminarProgrammierungItem">Seminarleiter</div>
                <div onClick={ this.triggerProgram } className="SeminarProgrammierungItem">Programm</div>

            </div>

            { this.state.leader ? this.renderLeader() : null }
            { this.state.program ? this.renderProgram() : null }
        </div>
    );

  }

  renderText() {
    let bio = 'Als die DDR unterging, wunderten sich die Arbeitsämter darüber, dass ausgerechnet Kellner ein besonderes Interesse an IT-Fortbildungen zeigten. Warum? Weil Sie gesehen hatten, dass Ihre Kollegen im Westen sich futuristischer Gadgets bedienten. Mein, man muss kein Programmierer werden, um wie ein Programmierer denken zu können. Aber es ist, in Anbetracht der rasant um sich greifenden Digitalisierung, fast überlebensnotwendig, diese „Denke“ zu begreifen, umsomehr, als die digitale Logik strukturell weltfremd ist: ein Geisteskontinent, der sich nur erschließt, wenn man ihn betritt.'

    return(
        <div>
          <Expandable title="Warum?" body={ renderHTML(bio) } showBody={true}/>
          <Expandable title="Wie" body={ renderHTML(bio) } showBody={false}/>
          <Expandable title="Wie und wo" body={ renderHTML(bio) } showBody={false}/>
          <Expandable title="Das Lernportal" body={ renderHTML(bio) } showBody={false}/>
        </div>
    );
  }


  render() {
    var key = parseInt( Math.random() * 100);

    let list = [
      './resources/lp_code01.jpg',
      './resources/lp_code02.jpg',
      './resources/lp_code03.jpg',
      './resources/lp_code04.jpg'
    ];


    let thinking = this.state.TEXT.__('MovingTitleThinking');

    return (
        <div className="SeminarPage" > 
            { this.renderSeal() }
            <div className="movingSeminarTitle">{ thinking }</div>
            { this.renderDescription() }
            { this.state.videoStart ? <EmbeddedYouTube key={key} auto link="E_xTU4l-eVM" /> : null }
            <Background style={{ filter: 'sepia(70%) brightness(60%) contrast(120%)'}} images={ list } in='fade-in' out="fade-out" time={6}/>

        </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(SeminarProgramming);
