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
<div className="rightMenu">
<center><h1>Приветствуем вас на сайте<br></br> вакансий</h1></center>
<hr></hr>
<center><img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/GNOME_Web_logo.png" className="img_" alt="Логотип сайта"/></center> 
<button class="knopka1">
        Поиск </button>
    <button class="knopka1">
        Поиск </button>
    <button class="knopka1">
        Поиск </button>
    <button class="knopka1">
        Поиск </button>
    <button class="knopka1">
        Поиск </button>
    <hr></hr>
</div>

        <div className="menu">
        <form className="form_">
         <input placeholder="Ввод информации:" class="pole" type="search" value={this.state.name} onChange={this.handleChange}  />
        <button class="knopka" onClick={this.handleClickSearch}>
        Поиск
    </button>
        <button class="reg">
        Поиск
    </button>
    </form>
    </div>
    <div className="viravnivanie"></div>
        {console.log(data)}
        {data && data.map((data,index) => {
          return (  
          <div key={index}>
          
          <div className="vivod">
            <div><h2><a href={data.alternate_url}>{data.name}</a></h2></div>
            
            <div><hr></hr><p>Требования:{data.snippet.requirement}</p></div>
            <div ><p>Город:{data.area.name}</p></div>
            <div><p>Статус:{data.type.name}</p></div>
                </div>
            </div>
            
  
          )
        })}
         <div className="bottom"><center><p>Благодарим за посищение сайта(С)</p></center></div>
      </div>
    );
  }
}


export default App;
