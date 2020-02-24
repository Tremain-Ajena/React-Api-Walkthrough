import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';
// YOU HAVE TO INSTALL THE 'ISOMORPHIC-FETCH' AND 'ES6-PROMISE'
// MANUALLY EACH TIME THROUGH THE TERMINAL BY TYPING IN "npm install es6-promise" and "npm install isomorphic-fetch"

class App extends Component {
  componentDidMount(){
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    // .then(res => console.log(res));
    // .then(res => res.json())
    .then(obj => console.log(obj));
    // 'res' stands for response in this situation
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className= 'App-title'> Welcome to React</h1>
        </header>
          <p className= 'App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );

  }
}

export default App;
