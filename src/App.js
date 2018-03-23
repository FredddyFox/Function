import React, { Component } from 'react';
import './App.css';
import RightMenu from './RightMenu';
import Bottom from './Bottom';
import Vivod from './Vivod';
import Header from './Header';

class App extends Component {
 
  state={
    date: [], 
    loading: true
  };
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
  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickSearch = name => event => {
    event.preventDefault(); 
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
             this.setState({
              data: items, 
              loading: false
            });
            })
  };
  render(){
    const {data} = this.state;
    return (
      /*loading ? <div>Загрузка</div> :*/ 
      <div>
        <RightMenu/>
        <Header handleClickSearch={this.handleClickSearch}/>
        <div className="viravnivanie"></div>
        <Vivod data={data}/>
        <Bottom/>
      </div>
    );
  }
}


export default App;