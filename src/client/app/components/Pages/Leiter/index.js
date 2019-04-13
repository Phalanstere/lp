import React, { Component } from 'react';
import DynamicPage from  '../../../components/DynamicPage';
import { Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const portrait = './resources/Burckhardt3.jpg';



class Burckhardt extends Component {

 constructor(props) {
   super(props);

    this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }


  componentDiddMount() {
    console("MOUNTING BURCKHARDT");



    this.setState({
      Text: TEXT
			});
    
      console.log("MOUNTING ");
      console.log(Text);

  }

  render() {

    const style = {
        position: 'absolute',
        fontFamily: 'Open Sans',
        left: 0,
        top: 52,
        fontSize: '2vw',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: '100%',
        height: '90%',
        color: 'red',
        padding: '2vw',
    }

      let name = {
        marginTop: '20px',
        color: 'black',
        fontSize: 'calc(16px + 0.2vw)',
        textAlign: 'left',
        minWidth: '500px',
        width: '40%',
        textAlign: 'justify'
      }



      let bio = {
        marginBottom: '50px',
      }

      let back = {
        background: 'white'
      }

      let back2 = {
        background: 'darkyan'
      }


      /*
      <img style = { { right: '10%' } } width = 'auto' height ='80%' src = { portrait } />
      <div style = { name }>Martin Burckhardt</div>
      */
    return (

      
        <div style = { style } >
            <Col style = { back } xs={8} md={5} >
              <img style = { { right: '10%' } } width = '82%' height ='auto' src = { portrait } />
            </Col>

            <Col style = { name } xs={4} md={7} >
              <div style = {{ width: '100%', height: '100%'}} >
                <h2 style = { { color: 'rgb(0,80,200)' }}>Martin Burckhardt</h2>
                
                <div style = { bio} >
                { this.state.TEXT.__('BurckhardtVita') }
                </div>

                <div>
                  <a href='http://burckhardt.ludicmedia.de' target = '_blank'>{ this.state.TEXT.__('Homepage') }</a>
                </div>

                <span>
                  <a href='https://de.wikipedia.org/wiki/Martin_Burckhardt_(Autor)' target = '_blank'>{ this.state.TEXT.__('Wikipedia') }</a>
                </span>

              </div>
            </Col>


        </div>

        
    );
  }
}


function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(Burckhardt);
