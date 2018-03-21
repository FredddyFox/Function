import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class App extends Component {
 
constructor(props){
  super(props);
  this.state={date: [], name: ''};
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
    this.getQuery(`https://api.hh.ru/vacancies`)
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
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleClickSearch = () => {
    this.getQuery(`https://api.hh.ru/vacancies?text=${this.state.name}`)
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
  };
  
 
      
  
  render() {
    const {data} = this.state;
    return (
      
      <div>
        <div className="menu">
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <Button variant="raised" color="primary" onClick={this.handleClickSearch}>
      Поиск
    </Button>
    </div>
        {console.log(data)}
        {data && data.map((data,index) => {
          return (  
          <div key={index}>
          <div className="vivod">
            <div><h3>{data.name}</h3></div>
            <div>{data.snippet.requirement}</div>
            <div >{data.area.name}</div>
            <div>{data.type.name}</div>
            </div>
            </div>
            
            
          )
        })}
         
      </div>
    );
  }
}


export default App;
