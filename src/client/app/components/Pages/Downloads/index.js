import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



var list = [
    {
    title: "Die Scham der Philosophen",
    type: "pdf",
    link: "./resources/Burckhardt_Scham_der_Philosophen.pdf",    
    id: 1    
    },
    {
    title: "Digitale Metaphysik",
    type: "pdf",
    link: "./resources/DigitaleMetaphysik.pdf",    
    id: 2    
  },
    {
    title: "Die Gattin des Caligula",
    type: "pdf",
    link: "./resources/Diva.pdf",    
    id: 3    
    },
    {
    title: "Brandlhuber, Antwerpen",
    type: "pdf",
    link: "./resources/BrandlhuberLecture.pdf",    
    id: 4    
    },
    {
    title: "Flugbegleiter, Basel",
    type: "pdf",
    link: "./resources/Flugbegleiter.pdf",    
    id: 5    
    },
    {
    title: "Die Guillotine",
    type: "pdf",
    link: "./resources/Guillotine.pdf",    
    id: 6    
    },
    {
    title: "Bilderstürmer.Traumfabrik",
    type: "pdf",
    link: "./resources/Terror.pdf",    
    id: 7    
    },
    {
    title: "Was werde ich tun ... ",
    type: "pdf",
    link: "./resources/Liquide.pdf",    
    id: 8    
  },
    {
    title: "Der Traum der Maschine",
    type: "pdf",
    link: "./resources/Traum.pdf",    
    id: 8    
    },


]




class Downloads extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }

onClick(file) {
  let title = file.title + ".pdf";  
  fileDownload(title, file.link);
}

get_file(e, i) {
    this.title = e.title;

    return (
          <div key = { i} className = "download_file">
            <a href= { e.link}  download>
            <div className = "download_file_image"><img src = './resources/pdf.svg' /></div>
            <div className = "download_file_info">
              { this.title }
            </div>
            </a>


        </div>
    )

}


renderFiles() {
   let view = [];

    for (var i = 0; i < list.length; i++) {
      let e = list[i];
      
      view.push(
       this.get_file(e, i)
      )
    }

  return view;

}


 
  render() {
    return (
        <div className ="DownloadPage">
            { this.renderFiles() }
        </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    state: state
  };

}

export default connect(mapStateToProps)(Downloads);
