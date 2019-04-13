import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

import vita_DE from  "html-loader!../../../components/TEXT/Vita_DE.html";
import vita_EN from  "html-loader!../../../components/TEXT/Vita_EN.html";

import { TweenMax } from "gsap";


const bg = './resources/Burckhardt.jpg';




class Biography extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }
 }




  componentDidMount() {
    let el = document.getElementById("BioPage");
    TweenLite.to(el, 0, {opacity:0.01})
    TweenLite.to(el, 1, {opacity:1})
    
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
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
        width: '50%',
        height: 'auto',
        padding: '3vw',
        paddingBottom: '5vw',
        color: 'black',
        overflow: 'hidden',
        fontFamily: 'Open Sans',
        background: 'white'

    }


    const back = {
      width: '100%',
      height: '100%',
      backgroundImage: 'url(' + bg + ')'

    }

    const left = {
      marginTop: '1vw',
      marginLeft: '1vw',
      height: '92%',
      width: '35%',
      float: 'left',
      backgroundImage: 'url(' + bg + ')',

      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat'
    }  

 

    let bio = vita_DE;
    if (this.props.language === "en") bio = vita_EN;



    return (
        <DynamicPage id = "BioPage">
        <div className = "BioLeft" style = { left } >
        </div>  

        <div className = "BioRight">
          <div className = "Titling">
            Martin Burckhardt
          </div>
          <div id = "BioSection">
            <div className = "BioColumns">
              { renderHTML ( bio ) }
            </div>
          </div>
        </div>  
        </DynamicPage>
    );
  }
}


// { TEXT.__("BurckhardtVita") }

function mapStateToProps(state) {
  return {
    language: state.actual_language,
    store: state
  };

}

export default connect(mapStateToProps)(Biography);
