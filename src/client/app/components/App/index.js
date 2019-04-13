import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import IndexSearch from '../../components/IndexSearch';

import './style.css';

class App extends Component {

 constructor(props) {
   super(props);
   this.state = {
   }
 }


  componentDidMount() {
    if (window.location.hash === "#/") window.location.hash = "#/intro"
  }


  render() {


    return (
      <div>
          <NavBar/>
          <IndexSearch />
      </div>
    );
  }
}

export default App;