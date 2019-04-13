import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.css';


class SimpleSlider extends React.Component {
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <div className = 'slider'>
        <Slider {...settings}>
            <div><h3>HALLO</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
        </Slider>
        </div>
        );
    }
}






export default SimpleSlider;