import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

import Particles from 'react-particles-js';

const partOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={partOptions} />
        <Calculator />
      </div>
    )
  }
}