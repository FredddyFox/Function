import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instagram from './img/instagram.svg';
import Youtube from './img/youtube.svg';
import Twitter from './img/twitter.svg';
import Google from './img/google-plus.svg';
import RightMenu from './RightMenu';
<<<<<<< HEAD
import Bottom from './Bottom';
import Vivod from './Vivod';
=======
import Header from './Header';
>>>>>>> 753b4487cc7998b3027a968899ff4b2e058c6fc6

class App extends Component {
 
  state={
    date: [], 
    loading: true
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
  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickSearch = event => {
    event.preventDefault(); 
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
             this.setState({
              data: items, 
              loading: false
            });
            })
  };
  
  render() {
    const {data} = this.state;
    return (
      /*loading ? <div>Загрузка</div> :*/ 
      <div>
<<<<<<< HEAD
<RightMenu/>
        <div className="menu">
        <form className="form_">
         <input placeholder="Ввод информации:" class="pole" type="search" value={this.state.name} onChange={this.handleChange}  />
        <button class="knopka" onClick={this.handleClickSearch}>
        Поиск
    </button>
    </form>
    </div>
=======
         <RightMenu />
         <Header />
>>>>>>> 753b4487cc7998b3027a968899ff4b2e058c6fc6
    <div className="viravnivanie"></div>
        <Vivod data={data}/>
        <Bottom/>
      </div>
    );
  }
}


export default App;