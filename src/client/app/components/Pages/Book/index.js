import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

const logo = './resources/pdf.svg';
import {withRouter} from 'react-router';

import Booklist from  '../Books/BookList.js';

class Book extends Component {



 constructor(props) {
   super(props);



   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }


 sampleChapter() {
    let chapter = this.props.state.actual_book.sample_chapter;

    store.dispatch({ type: "CHAPTER_SELECTED", payload: chapter });  
    window.location.hash = "#/sample_chapter?id=" + this.props.state.actual_book.id;
 }


 check_book(location) {
  if (! this.props.state.actual_book) {

    let id = parseInt( location.search.substr(4) );

    for (var i = 0; i < Booklist.length; i++) {
      let book = Booklist[i];
      console.log (book.id);
      if (book.id === id) this.actual_book = book;
    }

    // window.location.hash = "#/books";
    return true;
    }
  return false;
 }
 

 
  render() {
    const { router, params, location, routes } = this.props;
    console.log(location);

    this.check_book(location);


    const style = {
        position: 'absolute',      
        height: 'calc(100% - 52px)',
        top: '52px',
        width: '100%',
        background:'white',
        overflow: 'hidden',
        // backgroundImage: 'url(./resources/Pattern/pixel.png)',
    }

  const left = {
    position: 'absolute',
    margintop: '10%',
    top: '10%',
    height: '90%',
    marginTop: '1%',
  }

  const right = {
    position: 'absolute',
    right: '0%',
    left: '43%',
    width: '57%',
    margin: 'auto',
    top: '10%',
    minWidth: '500px',
    height: '83%',
    overflow: 'auto'

  }


  let b = this.props.state.actual_book;
  if (! b) b = this.actual_book;
  console.log ( b );

  let lang = this.props.state.actual_language;

  let desc  = "Noch keine Beschreibung";
  if (b.description) {
    desc = b.description[lang];
  }

  let contributors = {};


  this.pf = null;
  if (b.sample_chapter) 
    {
    this.pdf       = (<div title = { TEXT.__("sample_chapter")} onClick = { this.sampleChapter.bind(this) } className = "sample_chapter">
                    <img src = { logo } />
                     </div> 
                     );
    }

  let pdf_style = {
    position: 'absolute',
    left: 20,
    top: 20,
    width: '40px',
    height: '60px',
    background: 'red',
  }


  


    return (
        <div style = { style }>
          { this.pdf }
          <div style = { left} >
            <img className = 'SingleBook' src = { b.image } />
            <div className = "bookinfoLarge">{ b.publisher + ". " + b.date  + ", " + b.pages + " " + TEXT.__("pages") } </div>
          </div>  
          <div style = { right } >
            <div className = "bookDescription">
              <h1 className = "booktitle">{ b.title}</h1>
              <h3 className = "booksubtitle">{ b.subtitle }</h3>
              <div className = "BookDetailed" >
                {renderHTML(desc)}
              </div>

            </div>
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

export default withRouter( connect(mapStateToProps)(Book) );
