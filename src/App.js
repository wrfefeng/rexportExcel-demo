import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>wrf</h1>
        <Home/>
      </div>
    );
  }
}

export default App;
