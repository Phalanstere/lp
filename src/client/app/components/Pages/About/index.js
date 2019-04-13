import React, { Component } from 'react';
import ReactPDF from 'react-pdf';
import './styles.css';

const schedule = './resources/About.pdf';
const pdfSize = 605;



class About extends Component {

 constructor(props) {
   super(props);

   this.state = {
       pageSize: 1,  // war 2.2
       zoom: 2,
       maxPages: 2,
       actualPage: 0,
   }

   this.checkSize.bind(this);

 }


  backward() {
    if (this.state.actualPage > 0) {
        const newpage = this.state.actualPage -1;

        this.setState({
          actualPage: newpage
        });
    }
  }


  forward() {
    if (this.state.actualPage < this.state.maxPages) {
        const newpage = this.state.actualPage +1;

        this.setState({
          actualPage: newpage
        });
    }
  }

  checkSize() {
    this.height = window.innerHeight;
    this.width  = window.innerWidth;

    let zoom = this.state.zoom;

    if (this.width < 1200) zoom = 2.8;


    let newscale = (this.width / 1920) * zoom;
    const newPdfSize = Math.round( pdfSize * newscale);

    this.margin = (this.width - newPdfSize) / 2;



    this.setState({
          pageSize: newscale,
          margin: this.margin
    });

    this.forceUpdate();
  }



  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize.bind(this) );
  }


  getLeftArrow() {
    if (this.state.actualPage != 0) 
      {
      return (
            <div className = "leftArrow"><span onClick = { this.backward.bind(this)} className = 'arrow'>{'<'}</span></div>
            )  
      }
    else {
       return ( <div/> )
    }
  }

  getRightArrow() {
    if (this.state.actualPage < this.state.maxPages-1) 
      {
      return (
            <div className = "rightArrow"><span onClick = { this.forward.bind(this)} className = 'arrow'>{'>'}</span></div>
            )  
      }
    else {
       return ( <div/> )
    }
  }


  render() {

    let viewerStyle = {
      left: this.margin
    }


    let leftArrow = this.getLeftArrow();
    let rightArrow = this.getRightArrow();


    return (
      <div>
        { leftArrow }
        { rightArrow }
        <div style = { viewerStyle} id = "PdfViewer" className = 'PdfViewer'>
          <ReactPDF
              file= { schedule }
              pageIndex={this.state.actualPage}
              scale={ this.state.pageSize}
              onDocumentLoad={this.onDocumentLoad}
              onPageLoad={this.onPageLoad}
          />
        </div>
      </div>

    );
  }
}

export default About;