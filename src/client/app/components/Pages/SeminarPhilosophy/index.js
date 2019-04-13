import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import EmbeddedYouTube from  '../../../components/EmbeddedYouTube';

import '../../../../resources/animations.css';

import './seminar-philosophy.css';


class SeminarPhilosophy extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      videoStart: false,
      program: false,
      leader: false
    }

    this.renderProgram = this.renderProgram.bind(this);

  console.log("Die Sprache der Seite " + this.props.language); 

 }




  componentDidMount() {
  }

  triggerVideo() {
    this.setState({
      videoStart: true
    })
  }


  triggerLeader() {
    this.setState({
      leader: true,
      videoStart: false
    })
  }

  triggerProgram() {
    this.setState({
      program: true,
      videoStart: false
    })
  }


  content() {
    return (
      <div className="SeminarPhilosophy-grid-container">
        <div className="SeminarPhilosophy-title">Digitale Philosophie</div>
        <div className="SeminarPhilosophy-right"></div>
        <div className="SeminarPhilosophy-middle">Ein Nachdenken</div> 

        <div className="SeminarPhilosophy-links">
          <ul>
            <li onClick={ this.triggerVideo.bind(this)}>Trailer</li>
            <li onClick={ this.triggerLeader.bind(this)}>Seminarleiter</li>
            <li onClick={ this.triggerProgram.bind(this)}>Programm</li>
          </ul>


        </div>
        <div className="SeminarPhilosophy-bar" />
    </div>
    );
  }


  renderLeader() {
    let url = 'url(./resources/lp_burckhardt.jpg)';
    let bio = this.state.TEXT.__('Burckhardt1');

    return (
      <div className="SeminarPhilosophy-leader-container">
        <div className="SeminarPhilosophy-leader-bar" />
        <div className="SeminarPhilosophy-leader-title">Leiter</div>
        <div className="SeminarPhilosophy-leader-person">Dr. Martin Burckhardt</div>

        <div className="SeminarPhilosophy-leader-content">{bio}</div>
        <div className="SeminarPhilosophy-leader-basis" />

        <div style={{ backgroundImage: url }} className="SeminarPhilosophy-leader-image">
        </div>)
      </div>
    );
  }

  renderProgramLink() {
    return '<div className="linkedPdf">verlinktes Pdf</div>';
  }


  renderProgram () {
    let description = this.state.TEXT.__('SeminarPhilosophy');

    let image = './resources/pdf.svg';

    return (
      <div className="SeminarPhilosophy-program-container">
        <div className="SeminarPhilosophy-program-header">Programm</div>
        
        <div className="SeminarPhilosophy-program-content">{ description }</div>

        <div title={ this.state.TEXT.__('programPDF')} className="SeminarPhilosophy-program-link"><img src={image} /></div>

        <div className="SeminarPhilosophy-program-bar" />
      </div>
    );
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
      "Übersetzungen, quick and dirty oder elaboriert",
      "Von der Mansukript-Evaluierung bis zum Lektorat",
      "Wie man mit einem Bot kommuniziert ..."
    ];


    var key = parseInt( Math.random() * 100 );
    let philosophy = this.state.TEXT.__('MovingTitlePhilosophy');

    return (
        <div className="SeminarPhilosophy" > 
            <div className="movingSeminarTitle">{ philosophy }</div>
            <Background style={{ filter: 'sepia(70%)'}} images={ list } in='fade-in' out="fade-out" time={6}/>
            { this.content() }
            { this.state.program ? this.renderProgram() : null }
            { this.state.leader ? this.renderLeader() : null }
            
            { this.state.videoStart ? <EmbeddedYouTube key={key} auto link="SiCHu9ALQxg"/> : null }
        </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(SeminarPhilosophy);
