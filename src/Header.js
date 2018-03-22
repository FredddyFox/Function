import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';


class Header extends Component {
constructor(props){
    super(props);
    this.state={
        date: [], 
        name: '', 
        loading: true
    };
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

render(){
    return (
        <div className="menu">
        <form className="form_">
         <input placeholder="Ввод информации:" className="pole" type="search" value={this.state.name}
          onChange={this.handleChange} />
        <button className="knopka" onClick={this.handleClickSearch}>
        Поиск
    </button>
        <button className="reg">
        Поиск
    </button>
    </form>
    </div>
    )}

}

export default Header;