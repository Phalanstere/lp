import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from  '../../../components/Background';

import Expandable from  '../../../components/Expandable';
import renderHTML from 'react-render-html';

import EmbeddedYouTube from  '../../../components/EmbeddedYouTube';



import '../../../../resources/animations.css';




class SeminarProgramming extends Component {

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


  renderLeader() {
    return (
      <div>
        <img width = '100%' src = "./resources/BurckhardtPortrait.jpg" />
        <div>Dr. Martin Burckhardt</div>
      </div>
    );
  }


  renderDescription() {
    var desc = 'Das Seminar führt in einem Wochenende in die Grundlagen moderner, objektorientierter Programmierung ein. Als Basis dient JavaScript, das, in Gestalt von Node.js, im letzten Jahrzehnt zur lingua franca des Internets geworden ist. Die Teilnehmer lernen, was Variablen sind, was es mit der Typisierung auf sich hat, welche Kontrollstrukturen es gibt, wie man mit Arrays arbeitet, Objekte definiert und APIs einbettet. Kurzum: sie erleben und erleiden einen Crashkurs in Programmierung, von dem aus, wenn sie denn wollen, mit einem gesunden Basiswissen in die Materie einsteigen können. Der eigentliche Mehrwert aber ist, dass das Seminar die Teilnehmer befähigt, mit Programmierern und IT-Spezialisten auf satisfaktionsfähige Weise zu kommunizieren.';
    return (
        <div>{desc}</div>
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
    let list = [
      './resources/Aircraft.jpg',
      './resources/baby.jpeg',
      './resources/Bahnhof.jpg',
      './resources/challenger.jpg',
      './resources/Grace_Hopper.jpg',
      './resources/Frank_DIA.jpg'
    ];

    return (
        <div className="SeminarPage" > 
            <div className="movingSeminarTitle">Zum Denken der Programmierung</div>
            <div className="SeminarPageBody">
              <div className="SeminarImages">
                { this.renderLeader() }
              </div>
              <div className="SeminarExplanation">
                { this.renderText() }
              </div>

              <div className="SeminarDescription">
                { this.renderDescription() }
              </div>

            </div>
            <EmbeddedYouTube link="Tw5tbhn1itA"/>
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
