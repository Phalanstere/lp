import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PictureShow from  '../../../components/PictureShow';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';





// 
//  
// 'https://c1.staticflickr.com/1/211/493885707_394f4edb6e_z.jpg?zz=1',

let imageList = [
    './resources/Grace_Hopper.jpg',
    'http://www.doncio.navy.mil/uploads/0315NMQ69785.jpg',
    'http://navylive.dodlive.mil/files/2017/03/NH-96925.jpeg',
    'http://news.yale.edu/sites/default/files/YaleNews_hopper-grace.UNIVAC.102635875-CC_0.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/43/Cambridge_differential_analyser.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/79/NASA_Differential_Analyzer.jpg',
    'https://i.kinja-img.com/gawker-media/image/upload/s--oBFvT6e7--/c_scale,f_auto,fl_progressive,q_80,w_800/kyulbekkdomrvbw2iqol.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8f/Card_puncher_-_NARA_-_513295.jpg',
    'https://i.ytimg.com/vi/fIsPFWSYf3c/maxresdefault.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/HD.1A.018_%2814651763814%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Eniac.jpg',
    'https://s-media-cache-ak0.pinimg.com/736x/7b/5b/fa/7b5bfa18b9e1f5bff7d8e92ce57d9887.jpg',
    'http://ethw.org/w/images/thumb/c/c8/Jay_W._Forrester.jpg/300px-Jay_W._Forrester.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/82/Robert_Noyce_with_Motherboard_1959.png',
    'https://upload.wikimedia.org/wikipedia/commons/c/c7/Portrait_of_George_Boole.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Hollerith.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c2/Bardeen_Shockley_Brattain_1948.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Charles_Babbage_-_1860.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Charles_Babbage_by_Antoine_Claudet_c1847-51-crop.jpg',
    'https://upload.wikimedia.org/wikipedia/en/6/66/The_Traitorous_Eight.jpg',
    'https://pixeline.be/uploads/2015/07/vannevar-bush.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/National_Advisory_Committee_for_Aeronautics_%287584802758%29.jpg',
    'https://pbs.twimg.com/media/Chdlg1zWMAArUFc.jpg:large',
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/Thomas_J_Watson_Sr.jpg',
    'https://c1.staticflickr.com/1/656/23022750663_139061eca4_z.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg',
    'http://ds-wordpress.haverford.edu/bitbybit/wp-content/uploads/2012/07/Chapter_7-200-Copy.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/DA_Cambridge_c1937.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/04/SRI_Douglas_Engelbart_1968.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/SRI_ARC_Engelbart_Nov_1969.jpg',
    'http://ic.pics.livejournal.com/paradoxov/48218227/1472978/1472978_original.jpg',
    'https://polymus.ru/media/cache/67/b1/67b177278fda4440191819852d9138b9.jpg',
    'http://histoire.info.online.fr/images/besm6.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5e/JohnvonNeumann-LosAlamos.gif',
    'https://upload.wikimedia.org/wikipedia/commons/5/5d/Konrad_Zuse_und_Heinz_Nixdorf.JPG',
    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Aiken.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IBM_Automatic_Sequence_Controlled_Calculator_Sequence_Indicators.jpg/640px-IBM_Automatic_Sequence_Controlled_Calculator_Sequence_Indicators.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/UNIVAC-1103-BRL61-0905.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/bd/UNIVAC-I-BRL61-0977.jpg',
    ]



class Computerworld extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }



 
  componentDidMount() { 
  }

  render() {

    // <PictureShow list = { imageList }  parentID = "DiaShowCanvas" />

    return (
        <div className = "computerworld">
          <div id = "DiaShowCanvas">
            <PictureShow random_sequence list = { imageList }  duration = { 6000}  interval = { 3000 } type = { "FADE"} parentID = "DiaShowCanvas" />
          </div>

          <div id = "ComputerworldProject">
            <div className = "Explanation">
              { TEXT.__("computer_culture") }
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

export default connect(mapStateToProps)(Computerworld);
