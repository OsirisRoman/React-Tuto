import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meaningOfLife: 47 + this.props.increment
    }
  }

  handleClick = () => {
    this.setState((prevState, prevProp) => {
      return {meaningOfLife: prevState.meaningOfLife + prevProp.increment}
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.meaningOfLife}
          </p>
          <button
            onClick={this.handleClick}
          >
            Actualizar Estado
          </button>
        </header>
      </div>
    );
  }
}

export default App;