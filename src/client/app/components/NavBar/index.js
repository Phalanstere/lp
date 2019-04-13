import React, { Component } from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import TEXT from '../../components/TEXT';
import {Link, browserHistory} from 'react-router-dom';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {selectLanguage} from '../../actions'




global.TEXT = TEXT; 


// bUtils.addStyle(Navbar, ['home'] );
import './style.css';

// const logo = './logo.png';
 const logo = './resources/NewLogo64.png';


class NavBar extends Component {



  constructor(props) {    
    super(props);
    this.state = {
      locale: 'de'
    }

  this.handleSelect = this.handleSelect.bind(this);  
  }


  setSelected() {

  }  


  handleSelect (event, eventKey) {
    window.lazarus = event;


    switch(event) {
      case 'SET_TO_GERMAN':
        TEXT.setLocale('de');
        console.log ( "LANGUAGE " + this.props.selectLanguage);

        this.props.selectLanguage ('de');

        this.setState({
            locale: 'de'
          });
      break;
      case 'SET_TO_ENGLISH':
        console.log( this.actions);

        this.props.selectLanguage ('en');

        TEXT.setLocale('en');
        this.setState({
            locale: 'en'
          });
      break;


      case 'SEARCH':
        var st = document.getElementById("SearchTrigger");
        var rect = st.getBoundingClientRect();
        if (document.getElementById('IndexSearch').style.display !== 'block')
          {
          // now its visible   
          document.getElementById('IndexSearch').style.left = (rect.left - 50);
          document.getElementById('IndexSearch').style.display = 'block'; // show
          document.getElementById("IndexSearchInput").focus();
          }
      else document.getElementById('IndexSearch').style.display = 'none';

        
      break; 


      case 'HOME':
        console.log("Neuabspielen des Intros");
      break;


      case 'SCHEDULE':
        browserHistory.push('schedule');
      break;

      case 'OBJECTIVES':
        browserHistory.push('objectives');
      break;

      case 'NIT':
        browserHistory.push('NIT');
      break;

      case 'MOTIVATION':
        browserHistory.push('motivation');
      break;


      case 'SIGNUP':
        console.log("sollte auf die Signup Page verweisen");
      break;

      case 'CONTACT':
        browserHistory.push('contact');
      break;
    }

  }


  digital_survival() {
    window.open('http://ludicmedia.de/DigitalSurvival', '_blank');
  }


  changeLocation(hash) {
    if(history.pushState) {
            history.pushState(null, null, hash);
        }
        else {
            location.hash = has;
        }
  }



  onClick (key) {
    alert (key);
  }



  render() {
    let Style = {
        fontFamily: 'Calibri. monospace',
        position: 'fixed',
        zIndex: 1000,
        width: '100%'

    }; 


    let MenuStyle = {
        height: 'auto',
        width: 'auto',
        float: 'left',
        marginRight: 40,
        marginTop: -4,
        background: 'darkcyan',
        fontSize: 18,
        fontVariant: 'small-caps',
        padding: 4,
        cursor: 'pointer'

    };
/*
              <MenuItem onSelect={this.handleSelect} eventKey={3.1} href="#About">
                <Link to='/about'>{ TEXT.__('About') }</Link>              
              </MenuItem>
*/

    
    const navbarInstance = (
      <Navbar class="navbar-fixed-top" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src = { logo } />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onSelect={this.handleSelect} eventKey={'News'}>
              <Link to='/news'>{ TEXT.__('News') }</Link>
            </NavItem>

            <NavItem onSelect={this.handleSelect} eventKey={'Services'}>
              <Link to='/services'>{ TEXT.__('Services') }</Link>
            </NavItem>
          

            <NavDropdown eventKey={3} title= {  TEXT.__('Seminars') }  id="basic-nav-dropdown">
              <MenuItem eventKey={'SeminarsInfo'} href="#SeminarsInfo">{  TEXT.__('Seminar Information') }</MenuItem>   
              <MenuItem divider />
              <MenuItem eventKey={'StartupYourself'} href="#StartupYourself">{  TEXT.__('Startup Yourself') }</MenuItem>
              <MenuItem eventKey={'DigitalThinking'} href="#DigitalThinking">{  TEXT.__('NavSeminarThinking') }</MenuItem>                
              <MenuItem eventKey={'DigitalPhilosophy'} href="#DigitalPhilosophy">{  TEXT.__('NavSeminarPhilosophy') }</MenuItem>   
            </NavDropdown> 

            <NavItem onSelect={this.handleSelect} eventKey={'Portal'}>
              <Link to='/Portal'>{ TEXT.__('NavPortalTitle') }</Link>
            </NavItem>


            <NavDropdown eventKey={3} title= {  TEXT.__('Projects') }  id="basic-nav-dropdown">
              <MenuItem eventKey={'Computerwelt'} href="#computerworld">{  TEXT.__('computerworld') }</MenuItem>
                
                <MenuItem divider />
                <MenuItem onClick = { this.digital_survival } eventKey={'DIGITAL SURVIVAL'} >{  TEXT.__('Digital Survival Training') }</MenuItem>
            </NavDropdown> 


          </Nav>
          
          <Nav pullRight>

            <NavItem onSelect={this.handleSelect} eventKey={'CONTACT'} href="#/contact">
              <Link to='/contact'>{ TEXT.__('Contact') }</Link>
            </NavItem>
            
            <NavItem onSelect={this.handleSelect} eventKey={'About'}>
              <Link to='/company'>{ TEXT.__('About') }</Link>
            </NavItem>

            
            <NavItem id = "SearchTrigger" onSelect={this.handleSelect} eventKey={'SEARCH'}>
             { TEXT.__('Search') }
            </NavItem>


            <NavDropdown eventKey={8} title= { TEXT.__n('language') } id="basic-nav-dropdown">
              <MenuItem onSelect ={this.handleSelect} eventKey={'SET_TO_GERMAN'}>{ TEXT.__('German') }</MenuItem>
              <MenuItem onSelect={this.handleSelect} eventKey={'SET_TO_ENGLISH'}>{ TEXT.__('English') }</MenuItem>
            </NavDropdown>




          </Nav>

        </Navbar.Collapse>
        

      </Navbar>


    );
    

    return (
      <div style = { Style} >
        { navbarInstance }

      </div>
    );
  }
}






function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectLanguage: selectLanguage}, dispatch)
}

function mapStateToProps(state) {
  return {
    store: state
  };

}


export default connect(mapStateToProps, matchDispatchToProps)(NavBar);