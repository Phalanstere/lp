import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EmbeddedYouTube from  '../../../components/EmbeddedYouTube';
import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import Typewriter from  '../../../components/Typewriter';

import Seal from  '../../../components/Seal';


import Polaroid from  '../../../components/Polaroid';
import Postit from  '../../../components/Postit';
import PopupPage from  '../../../components/PopupPage';

import '../../../../resources/animations.css';
import './startup.css';

const bg = './resources/lp_postit.png';

class SeminarStartup extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language,
      videoStart: false,
      popUp: false,
      bio: 0,
      program: false,
      program_exiting: false
    }

  this.renderBio = this.renderBio.bind(this);
 }




  componentDidMount() {
  }


  renderText() {
    return(
      <div className="InfoTextBody">Sollte das Startup Seminar rendern</div>
    )
  }


  startVideo() {
    if (this.state.videoStart === false) {
      this.setState({
        videoStart: true
      });
    }
  }


  renderVideo() {
   
    var src="https://www.youtube.com/embed/Tw5tbhn1itA?modestbranding=1";
    if (this.state.videoStart === true) src = "https://www.youtube.com/embed/Tw5tbhn1itA?autoplay=1&showinfo=0&modestbranding=1&fs=1";
    return (
        <div onMouseOver={ this.startVideo.bind(this) } className="EmbeddedYouTube">
          {this.state.videoStart ?  null: <div className="videoOverlay" /> }
          <iframe allowfullscreen="allowfullscreen" width="560" height="315" src={ src } frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
        </div>
    )
  }

  renderInfo() {
    return (
      <div>
        Hier kommt das Seminar
      </div>
    );
  }

  callback(key) {
    switch(key) {
      case 1:
        this.setState({
          popUp: true,
          bio: 1,
          videoStart: false
        })
      break; 

      case 2:
        this.setState({
          popUp: true,
          bio: 2,
          videoStart: false
        })
      break;

      case 3:
        this.setState({
          popUp: true,
          bio: 3,
          videoStart: false
        })
      break;
    }
  }


  renderBio () {

    let reitenbach = this.state.TEXT.__('Reitenbach_Bio');
    let avo = this.state.TEXT.__('Avo_Bio');
    let burckhardt = this.state.TEXT.__('Burckhardt1');

    switch(this.state.bio) {
      case 1:
        return(
          <div>
            <div className="startupBioName">Dr. Martin Burckhardt</div>
                <div className="startupBio">
                <Typewriter
                    delay={100}
                    random
                    interval={25}
                    style={{       
                        fontSize: 18, 
                        lineHeight: 1.85 }}
                    text={burckhardt} /> 
            </div>
          </div>
        );

      case 2:
        return(
          <div>
            <div className="startupBioName">Dr. Ivanina Reitenbach</div>
            <div className="startupBio">
                <Typewriter
                    delay={100}
                    random
                    interval={25}
                    style={{       
                        fontSize: 18, 
                        lineHeight: 1.85 }}
                    text={reitenbach} /> 
            </div>
          </div>
          

        );

      case 3:
       return(
          <div className="startupBioName">
            <div>Prof. Dr. Avo Schönbohm</div>
            <div className="startupBio">
                  <Typewriter
                      delay={100}
                      random
                      interval={25}
                      style={{ 
                          color:"darkslategrey",   
                          lineHeight: 1.85,      
                          fontSize: 18 }}
                      text={avo} /> 
            </div>
          </div>
        );
    }

  }

  hideBio() {
    this.setState({
      popUp: false
    });
  }

  resetProgram() {
    this.setState({
      program: false,
      program_exiting: false
    });
  }
 

  removeProgram() {
    this.setState( {
      program_exiting: true
    });

    setTimeout(this.resetProgram.bind(this), 3000);
  }


  renderProgram() {
    let program = this.state.TEXT.__('SeminarStartup');

    let classname = "SeminarStartupProgram";
    if (this.state.program_exiting === true) classname = "SeminarStartupProgramLeaving";

    return(
      <div onClick={ this.removeProgram.bind(this) } className={ classname }>
        <div className="ProgramText">
                <Typewriter
                    delay={100}
                    random
                    interval={25}
                    text={program} /> 

          
        </div>

      </div>
    );

  }


  renderSeal() {
    return (
          <Seal 
          style={{fontFamily: 'Oswald', 
          position: 'absolute',
          left: '52%',
          top: 10,
          color: 'white',
          float: 'left',
          background: 'linear-gradient(to right, silver, darkslategray, black, silver)',
          transform: 'rotate(30deg)',
          cursor: 'pointer',
          marginRight: 40,
          boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px gainsboro, 0 0 20px gainsboro, 0 0 25px ivory, 0 0 40px silver, 0 0 55px white',
          marginBottom: 30}}

          innerStyle={{
            backgroundImage: 'url(./resources/lp_code01.jpg)',
            backgroundSize: 'auto 100%'
          }}

          activationMode
          upperArc={ 120 } 
          lowerArc={70} 
          title="Anmeldung"          
          lower="Anmeldung" 
          noOrnaments
          scale={.82}
          upper="Berlin, 13.-15. Juni"
          onClick={() => {
            window.open('https://www.ludeo.de/ludeo-akademie/digital-survival-lab-start-up-yourself/', '_blank');
          }}
      />
    )

  }


  triggerProgram() {
    this.setState({
      program: true
    });
  }


  render() {
    let first = [
      "Ein Seminar zur Persönlichkeitsentwicklung",
      "Tangoloft Berlin, 13.-15.6"
    ]


    let tango = [
      './resources/lp_tangoloft_1.jpg',
      './resources/lp_tangoloft_2.jpg',
      './resources/lp_tangoloft_3.jpg',
    ];

    let list = [
      './resources/lp-startup.jpg',
      './resources/lp_schedule.jpg',
      './resources/lp_wall01.jpg'
    ];


    let location = {
      backgroundImage: '/resources/lp_tangoloft1.jpg',
    }

    var key = "popup" + parseInt( Math.random() * 100 );



    return (
        <div style={ location } className="SeminarPage" >
            <Background time={10} style={{ height: 'calc(100% -160px)', filter: 'saturate(0.2)' }} images={list} />

            <div className="postcard">
              <Background time={8} inTime={1.7} images={tango} />
            </div>

            { this.renderSeal() }


            <Polaroid showPin onClick={ this.callback.bind(this) } 
                id={1} style={{ transform: 'scale(.8)', left: '25%', top: '4%'}} title="Dr. Martin Burckhardt" image="./resources/lp_Burckhardt2.png" />
            <Polaroid showPin onClick={ this.callback.bind(this) } 
              id={2} style={{ left: '13%', top: '37%', transform: 'scale(.8)  rotate(-6deg)' }} title="Dr. Ivanina Reitenbach" image="./resources/lp_Reitenbach.jpg" />
            <Polaroid showPin onClick={ this.callback.bind(this) } 
              id={3} style={{ left: '10%', top: '5%', transform: 'scale(.8) rotate(4deg)'}} title="Prof. Dr. Avo Schönbohm" image="./resources/Avo.png" />


            <Postit style={{ zIndex: -1, left: '24.5%', top: '29%', fontFamily: 'Oswald'}} title="" date="" 
                body={this.state.TEXT.__('Seminarleiter')}
            />

            <Postit color="blue" style={{ zIndex: -1, left: '75%', top: '5%', fontFamily: 'Indie Flower'}} title={ this.state.TEXT.__('SeminarLocation')} date="" 
                body="Tangoloft, Berlin"
            />

            <Postit onClick={this.triggerProgram.bind(this) } color="pink" style={{ zIndex: 2, left: '45%', top: '16%', fontFamily: 'Indie Flower'}} title={ this.state.TEXT.__('SeminarProgram') } date="" 
                body=""
            />


            { this.state.program ? this.renderProgram() : null }


            <div className="movingSeminarTitle">Startup Yourself</div>
            <EmbeddedYouTube image="./resources/lp-video-icon.png" link="Tw5tbhn1itA"/>

            { this.state.popUp ? <PopupPage style={{ paddingTop: 180, padding: 80, backgroundSize: '100% auto', backgroundImage: 'url(./resources/lp_notes3.jpg)' }}key={key} callback={this.props.hideBio}><div>{ this.renderBio() }</div></PopupPage> : null }
        
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

export default connect(mapStateToProps)(SeminarStartup);
