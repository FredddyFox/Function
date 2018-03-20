import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
  getQuery = (url) => {
    return new Promise((succeed, fail)=>{
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.addEventListener('load', () => {
        (request.status < 400) ? succeed(request.responseText) : fail(new Error('Error '+request.statusText))
      });
      request.addEventListener('error', ()=>{
        fail(new Error('Error'));
      });

      request.send();
    });
  };
  
  
  componentDidMount() {
    this.getQuery("https://api.hh.ru/vacancies").then(
      function(response){
        const obj = JSON.parse(response);
        console.log(obj.items);
 
      }
      
    )

    const request = new XMLHttpRequest();
request.open("GET", "https://api.hh.ru/vacancies", false);
request.send();
const status = request.status;
if(status==200)
document.write("Текст ответа: " + request.responseText)
else if(status==404)
document.write("Ресурс не найден")
else
document.write(request.statusText)

  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Игорь!!</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
