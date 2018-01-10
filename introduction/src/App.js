import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import DigitalClock from './DigitalClock';
import ToggleButton from './ToggleButton';
import LoginControl from './LoginControl';

class App extends Component {
  constructor() {
    super();

    this.user = {
      firstName: 'Philippe',
      lastName: 'De Pauw'
    };
  }

  componentDidMount() {
    console.log('App component is mounted!');
  }
  
  fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome { this.fullName(this.user) } to React</h1>
        </header>
        <Welcome name="Olivier Parent" />
        <Welcome name="Kristof Raes" />
        <Welcome name="Dieter De Weirdt" />
        <Clock date={ new Date() } />
        <DigitalClock increment="1" />
        <DigitalClock increment="2" />
        <DigitalClock increment="3" />
        <ToggleButton />
        <LoginControl />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
