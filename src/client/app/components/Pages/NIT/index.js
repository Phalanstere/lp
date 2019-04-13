import React, { Component } from 'react';
import DynamicIframe from  '../../../components/DynamicIFrame';


class NIT extends Component {

 constructor(props) {
   super(props);
 }



  componentDidMount() {
  }

  render() {

    return (
        <DynamicIframe src = 'https://www.nithh.de/'/>
    );
  }
}

export default NIT;