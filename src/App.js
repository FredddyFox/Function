import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RightMenu from './RightMenu';
import Header from './Header';
import Bottom from './Bottom';
import Info from './Info';

class App extends Component {
 

state={
    date: [], 
    loading:true

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
      <div>
         <RightMenu />
        <Header handleClickSearch={this.handleClickSearch}/>
    <div className="viravnivanie"></div>
        {console.log(data)}
        {data && data.map((data,index) => {
          return (  
          
            <Imfo />
  
          )
        })}
        <Bottom />
      </div>
    );
  }
}


export default App;
