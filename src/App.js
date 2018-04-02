"use strict";
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
this.getQuery(`https://api.hh.ru/vacancies?&only_with_salary=true`)
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

}
handleChange = event => {
this.setState({
  name: event.target.value,
});
};

handleClickSearch = name => event => {
event.preventDefault();
this.getQuery(`https://api.hh.ru/vacancies?text=${name}&only_with_salary=true`)
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
}

render(){
    const {data} = this.state;
    return (
      <div>
          <RightMenu/>
        <Header handleClickSearch={this.handleClickSearch}/>
        <div className="viravnivanie"></div>
          <div className="Content228"><Vivod data={data}/></div>
        <Bottom/>
      </div>
    );
  }
}

export default App;