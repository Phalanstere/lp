import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PictureShow from  '../../../components/PictureShow';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



// 
//  
// 'https://c1.staticflickr.com/1/211/493885707_394f4edb6e_z.jpg?zz=1',

let imageList = [
    './resources/TwinKomplexStore/01.jpg',
    './resources/TwinKomplexStore/02.jpg',
    './resources/TwinKomplexStore/03.jpg',
    './resources/TwinKomplexStore/04.jpg',
    './resources/TwinKomplexStore/05.jpg',
    './resources/TwinKomplexStore/06.jpg',
    './resources/TwinKomplexStore/07.jpg',
    './resources/TwinKomplexStore/08.jpg',
    './resources/TwinKomplexStore/09.jpg',
    './resources/TwinKomplexStore/10.jpg',
    './resources/TwinKomplexStore/11.jpg',
    './resources/TwinKomplexStore/12.jpg',
    './resources/TwinKomplexStore/13.jpg',
    './resources/TwinKomplexStore/14.jpg',
    './resources/TwinKomplexStore/15.jpg',
    './resources/TwinKomplexStore/16.jpg',
    './resources/TwinKomplexStore/17.jpg',
    './resources/TwinKomplexStore/18.jpg',
    './resources/TwinKomplexStore/19.jpg',

    './resources/TwinKomplexStore/20.jpg',
    './resources/TwinKomplexStore/21.jpg',
    './resources/TwinKomplexStore/22.jpg',
    './resources/TwinKomplexStore/23.jpg',
    './resources/TwinKomplexStore/24.jpg',
    './resources/TwinKomplexStore/25.jpg',
    './resources/TwinKomplexStore/26.jpg',
    './resources/TwinKomplexStore/27.jpg',
    './resources/TwinKomplexStore/28.jpg',
    './resources/TwinKomplexStore/29.jpg',
    
    './resources/TwinKomplexStore/30.jpg',
    './resources/TwinKomplexStore/31.jpg',
    './resources/TwinKomplexStore/32.jpg',
    './resources/TwinKomplexStore/33.jpg',
    './resources/TwinKomplexStore/34.jpg',
    './resources/TwinKomplexStore/35.jpg',
    './resources/TwinKomplexStore/36.jpg',
    './resources/TwinKomplexStore/37.jpg',
    './resources/TwinKomplexStore/38.jpg',
    './resources/TwinKomplexStore/39.jpg',


    './resources/TwinKomplexStore/40.jpg',
    './resources/TwinKomplexStore/41.jpg',
    './resources/TwinKomplexStore/42.jpg',
    './resources/TwinKomplexStore/43.jpg',
    './resources/TwinKomplexStore/44.jpg',
    './resources/TwinKomplexStore/45.jpg',
    './resources/TwinKomplexStore/46.jpg',
    './resources/TwinKomplexStore/47.jpg',
    './resources/TwinKomplexStore/48.jpg',
    './resources/TwinKomplexStore/49.jpg',



    './resources/TwinKomplexStore/50.jpg',
    './resources/TwinKomplexStore/51.jpg',
    './resources/TwinKomplexStore/52.jpg',
    './resources/TwinKomplexStore/53.jpg',
    './resources/TwinKomplexStore/54.jpg',
    './resources/TwinKomplexStore/55.jpg',
    './resources/TwinKomplexStore/56.jpg',
    './resources/TwinKomplexStore/57.jpg',
    './resources/TwinKomplexStore/58.jpg',
    './resources/TwinKomplexStore/59.jpg',


    './resources/TwinKomplexStore/60.jpg',
    './resources/TwinKomplexStore/61.jpg',
    './resources/TwinKomplexStore/62.jpg',
    './resources/TwinKomplexStore/63.jpg',
    './resources/TwinKomplexStore/64.jpg',
    './resources/TwinKomplexStore/65.jpg',
    './resources/TwinKomplexStore/66.jpg',
    './resources/TwinKomplexStore/67.jpg',
    './resources/TwinKomplexStore/68.jpg',
    './resources/TwinKomplexStore/69.jpg',



    './resources/TwinKomplexStore/70.jpg',
    './resources/TwinKomplexStore/71.jpg',
    './resources/TwinKomplexStore/72.jpg',
    './resources/TwinKomplexStore/73.jpg',
    './resources/TwinKomplexStore/74.jpg',
    './resources/TwinKomplexStore/75.jpg',
    './resources/TwinKomplexStore/76.jpg',
    './resources/TwinKomplexStore/77.jpg',
    './resources/TwinKomplexStore/78.jpg',
    './resources/TwinKomplexStore/79.jpg',

    './resources/TwinKomplexStore/80.jpg',
    './resources/TwinKomplexStore/81.jpg',
    './resources/TwinKomplexStore/82.jpg',
    './resources/TwinKomplexStore/83.jpg',
    './resources/TwinKomplexStore/84.jpg',
    './resources/TwinKomplexStore/85.jpg',
    './resources/TwinKomplexStore/86.jpg',
    './resources/TwinKomplexStore/87.jpg',
    './resources/TwinKomplexStore/88.jpg',
    './resources/TwinKomplexStore/89.jpg',

    './resources/TwinKomplexStore/90.jpg',
    './resources/TwinKomplexStore/91.jpg',
    './resources/TwinKomplexStore/92.jpg',
    './resources/TwinKomplexStore/93.jpg',
    './resources/TwinKomplexStore/94.jpg',
    './resources/TwinKomplexStore/95.jpg',
    './resources/TwinKomplexStore/96.jpg',
    './resources/TwinKomplexStore/97.jpg',
    './resources/TwinKomplexStore/98.jpg',
    './resources/TwinKomplexStore/99.jpg',


    './resources/TwinKomplexStore/101.jpg',
    './resources/TwinKomplexStore/102.jpg',
    './resources/TwinKomplexStore/103.jpg',
    './resources/TwinKomplexStore/104.jpg',
    './resources/TwinKomplexStore/105.jpg',
    './resources/TwinKomplexStore/106.jpg',
    './resources/TwinKomplexStore/107.jpg',
    './resources/TwinKomplexStore/108.jpg',
    './resources/TwinKomplexStore/109.jpg',
    './resources/TwinKomplexStore/110.jpg',
    './resources/TwinKomplexStore/111.jpg',
    './resources/TwinKomplexStore/112.jpg',
    './resources/TwinKomplexStore/113.jpg',
    './resources/TwinKomplexStore/114.jpg',
    './resources/TwinKomplexStore/115.jpg',
    './resources/TwinKomplexStore/116.jpg',
    './resources/TwinKomplexStore/117.jpg',
    './resources/TwinKomplexStore/118.jpg',
    './resources/TwinKomplexStore/119.jpg',


    './resources/TwinKomplexStore/120.jpg',
    './resources/TwinKomplexStore/121.jpg',
    './resources/TwinKomplexStore/122.jpg',
    './resources/TwinKomplexStore/123.jpg',
    './resources/TwinKomplexStore/124.jpg',
    './resources/TwinKomplexStore/125.jpg',
    './resources/TwinKomplexStore/126.jpg',
    './resources/TwinKomplexStore/127.jpg',
    './resources/TwinKomplexStore/128.jpg',
    './resources/TwinKomplexStore/129.jpg',
    
    './resources/TwinKomplexStore/130.jpg',
    './resources/TwinKomplexStore/131.jpg',
    './resources/TwinKomplexStore/132.jpg',
    './resources/TwinKomplexStore/133.jpg',
    './resources/TwinKomplexStore/134.jpg',
    './resources/TwinKomplexStore/135.jpg',
    './resources/TwinKomplexStore/136.jpg',
    './resources/TwinKomplexStore/137.jpg',
    './resources/TwinKomplexStore/138.jpg',
    './resources/TwinKomplexStore/139.jpg',


    './resources/TwinKomplexStore/140.jpg',
    './resources/TwinKomplexStore/141.jpg',
    './resources/TwinKomplexStore/142.jpg',
    './resources/TwinKomplexStore/143.jpg',
    './resources/TwinKomplexStore/144.jpg',
    './resources/TwinKomplexStore/145.jpg',
    './resources/TwinKomplexStore/146.jpg',
    './resources/TwinKomplexStore/147.jpg',


    ]



class TwinKomplexStore extends Component {

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
          <div id = "StoreCanvas">
            <PictureShow random_sequence list = { imageList }  container = { "StoreContainer" } duration = { 6000}  interval = { 3000 } type = { "FULLSCREEN"} parentID = "StoreCanvas" />
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

export default connect(mapStateToProps)(TwinKomplexStore);

