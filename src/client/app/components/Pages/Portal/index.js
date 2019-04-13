import React, { Component } from 'react';
import Background from  '../../../components/Background';
import Ticker from  '../../../components/Ticker';
import Expandable from  '../../../components/Expandable';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../Services/services.css';


  let imageList = [
      './resources/lp_portal1.jpg',
      './resources/lp_portal2.jpg',
      './resources/lp_portal4.jpg',
      './resources/lp_portal5.jpg',
      './resources/lp_portal6.jpg',
      './resources/lp_portal7.jpg',
    ];


class Portal extends Component {

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
    let objective = this.state.TEXT.__('TransformationObjective');
    let path = this.state.TEXT.__('TransformationPath');
    let interaction = this.state.TEXT.__('TransformationInteraction');
    let topics = this.state.TEXT.__('PortalTopics');
    let technology = this.state.TEXT.__('TransformationTechnology');
    
    let objectiveTitle = this.state.TEXT.__('TransformationObjectiveTitle');
    let pathTitle = this.state.TEXT.__('TransformationPathTitle');
    let interactionTitle = this.state.TEXT.__('TransformationInteractionTitle');
    let topicsTitle = this.state.TEXT.__('TransformationTopicsTitle');
    let technologyTitle = this.state.TEXT.__('TransformationTechnologyTitle');
    

    let exp = this.state.exp;


    return(
      <div style={{ fontFamily: 'Oswald'}} className = "InfoTextBody">
        <h1>Digitale Transformation</h1>
        <Expandable ndx={0} onClick={ this.select.bind(this) } title={objectiveTitle} body={ objective } showBody={exp[0]}/>
        <Expandable ndx={1} onClick={ this.select.bind(this) } title={ pathTitle } body={ path } showBody={exp[1]}/>
        <Expandable ndx={2} onClick={ this.select.bind(this) } title= { interactionTitle } body={ interaction } showBody={exp[2]}/>
        <Expandable ndx={3} onClick={ this.select.bind(this) } title={ topicsTitle } body={ topics } showBody={exp[3]}/>
        <Expandable ndx={4} onClick={ this.select.bind(this) } title={ technologyTitle } body={ technology } showBody={exp[4]}/>

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

    let movingTitlePortal = this.state.TEXT.__('MovingTitlePortal');

    return (
        <div className = "company">
          <div className="movingSeminarTitle">{movingTitlePortal}</div>
          <Background style={{ webkitFilter: 'saturate(20%)'}} images={ imageList } in='fade-in' out="fade-out" 
            inTime={2.5}
            outTime={2.2}
            still={10} 
            time={16} />


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

export default connect(mapStateToProps)(Portal);
