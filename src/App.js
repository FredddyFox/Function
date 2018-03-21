import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
 
constructor(props){
  super(props);
  this.state={
    data: [],
    nameVac: ''};
}

  getQuery = url => {
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
    let name = "Front-end"
    this.getQuery(`https://api.hh.ru/vacancies?text=${name}`)
    .then(
      response => {
          return JSON.parse(response);
      }
      )
        .then(
         obj => {
            return obj.items;
          })
          .then(
            items => {
             this.setState({data: items});
            })




    /*const request = new XMLHttpRequest();
request.open("GET", "https://api.hh.ru/vacancies, false);
request.send();
const status = request.status;
if(status==200)
document.write("Текст ответа: " + request.responseText)
else if(status==404)
document.write("Ресурс не найден")
else
document.write(request.statusText)
*/
  }

  
  render() {
    const {data} = this.state;
    console.log(data)
    return (
      <div>
        {data && data.map((data,index) => {
          return (
          <div key={index} style={{margin: '1rem', border: '1px solid black', background:"#222", color:"white"}}>
            <div><h3>{data.name}</h3></div>
            <div>{data.snippet.requirement}</div>
            
            </div>)
        })}
         
      </div>
    );
  }
}

export default App;
