import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* This is a class component */
class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'Hola Anael'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.string} </p>
          <button onClick={() => this.setState({string: 'Hola Osiris'})}>Click para cambiar Texto</button>
        </header>
      </div>
    );
  }
}

export default App;
