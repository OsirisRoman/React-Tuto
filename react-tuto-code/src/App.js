import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* This is a class component */
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'frank'
        },
        {
          name: 'Dracula',
          id: 'drac'
        },
        {
          name: 'Wolveman',
          id: 'wolve'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))
        }
      </div>
    );
  }
}

export default App;
