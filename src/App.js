import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const request = new XMLHttpRequest();
request.open("GET", "https://api.hh.ru/vacancies", false);
request.send();
const status = request.status;
if(status==200)
console.log("Текст ответа: " + request.responseText)
else if(status==404)
console.log("Ресурс не найден")
else
    console.log(request.statusText)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Игорь!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
