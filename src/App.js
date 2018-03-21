import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
        <div className="menu">
        <form>
         <input placeholder="Name" class="pole" type="search" value={this.state.name} onChange={this.handleChange}  />
        <button class="knopka" onClick={this.handleClickSearch}>
        Поиск
    </button>
    </form>
    </div>
        {console.log(data)}
        {data && data.map((data,index) => {
          return (  
          <div key={index}>
          <div className="vivod">
            <div><h3>{data.name}</h3></div>
            <div><p>Требования:{data.snippet.requirement}</p></div>
            <div ><p>Город:{data.area.name}</p></div>
            <div><p>Ссылка:</p><a href="">{data.alternate_url}</a></div>
            <div><p>Статус:{data.type.name}</p></div>
            

            </div>
            </div>
            
            
            
          )
        })}
         
      </div>
    );
  }
}


export default App;
