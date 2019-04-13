import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  render() 
  {

    let style = { 
                position: 'absolute',
                width: '100%',
                left: '0%',
                height: '40%',
                top: '52px',
                background: 'black',
                }


    return (
      <div style = {style} >
        <Wavesurfer
          audioFile={'./resources/Numbers.mp3'}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
          options={{height: 360, 
                    barHeight:0.9, autoCenter: true, barWidth:1, waveColor:"rgb(0,80,200" }}

        />
      </div>
      );
  }
}


export default MyComponent;