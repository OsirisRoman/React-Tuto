import React, { Component } from 'react';

import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component"
import {WebTitle} from "./components/WebTitle/web-title.component"

import './App.css';

/* This is a class component */
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <WebTitle name="Monsters Rolodex"></WebTitle>
        <SearchBox placeholder="Búsqueda de monstruos" handleChange={e => this.setState({searchField: e.target.value})}></SearchBox>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
