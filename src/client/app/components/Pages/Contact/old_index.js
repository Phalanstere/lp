import React, { Component } from 'react';
import ReactPDF from 'react-pdf';
import './styles.css';

const schedule = './app/resources/Contact.pdf';
const pdfSize = 605;

class Contact extends Component {

 constructor(props) {
   super(props);

   this.state = {
       pageSize: 2,
       zoom: 3,
   }

  this.checkSize.bind(this);
 }



 onPageLoad() {
  console.log("ist eingelesen worden");
  let doc = document.getElementById("PdfViewer");

  console.log(doc);
  }


 checkSize() {
    this.height = window.innerHeight;
    this.width  = window.innerWidth;

    let zoom = this.state.zoom;

    if (this.width < 1200) zoom = 2.8;


    let newscale = (this.width / 1920) * zoom;
    const newPdfSize = Math.round( pdfSize * newscale);

    this.margin = (this.width - newPdfSize) / 2;

    console.log("MARGIN " + this.margin);

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

  render() {


    return (
      <div id = "PdfViewerContact" className = 'PdfViewer'>
        <ReactPDF
            file= { schedule }
            pageIndex={0}
            scale={ this.state.pageSize}
            onDocumentLoad={this.onDocumentLoad}
            onPageLoad={this.onPageLoad}
        />
      </div>

    );
  }
}

export default Contact;