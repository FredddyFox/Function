import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Instagram from './img/instagram.svg';
import Youtube from './img/youtube.svg';
import Twitter from './img/twitter.svg';
import Google from './img/google-plus.svg';
import RightMenu from './RightMenu';
import Header from './Header';

class App extends Component {
 
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
    const {data} = this.state;
    return (
      <div>
         <RightMenu />
         <Header />
    <div className="viravnivanie"></div>
        {console.log(data)}
        {data && data.map((data,index) => {
          return (  
          <div key={index}>
          
          <div className="vivod">
            <div><tr><th><h2><a href={data.alternate_url}>{data.name}</a></h2></th></tr></div>
            <div><hr></hr><tr><td><p>Требования:{data.snippet.requirement}</p></td></tr></div>
            <div><tr><td><p>Город:{data.area.name}</p></td></tr></div>
            <div><tr><td><p>Статус:{data.type.name}</p></td></tr></div>
                </div>
            </div>
            
  
          )
        })}
         <div className="bottom"><div><img src={Instagram}
          className="img_soc"/><img src={Youtube} 
          className="img_soc_2"/><img src={Twitter} className="img_soc_4"/><img src={Google} 
          className="img_soc_3"/><p>Благодарим за посищение сайта(С)</p></div>
          </div>
      </div>
    );
  }
}


export default App;
