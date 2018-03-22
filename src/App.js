import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RightMenu from './RightMenu';
import Bottom from './Bottom';
import Vivod from './Vivod';
import Header from './Header';
import Bottom from './Bottom';
import Info from './Info';

class App extends Component {
 
<<<<<<< HEAD

state={
    date: [], 
    loading:true

  };
}

=======
  state={
    date: [], 
    loading: true
  }
>>>>>>> 1438346dc3cec352f4d54b68a4eee8751b4e33b5
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
<<<<<<< HEAD
};
  
=======
          .then(
            items => {
             this.setState({
              data: items, 
              loading: false
            });
            })
  };
>>>>>>> 1438346dc3cec352f4d54b68a4eee8751b4e33b5
  render(){
    const {data} = this.state;
    return (
      /*loading ? <div>Загрузка</div> :*/ 
      <div>
<RightMenu/>
        <div className="menu">
        <form className="form_">
         <input placeholder="Ввод информации:" class="pole" type="search" value={this.state.name} onChange={this.handleChange}  />
        <button class="knopka" onClick={this.handleClickSearch}>
        Поиск
    </button>
    </form>
    </div>
         <RightMenu />
         <Header />
        <Header handleClickSearch={this.handleClickSearch}/>
    <div className="viravnivanie"></div>
<<<<<<< HEAD
        {console.log(data)}
        {data && data.map((data,index) => {
          return (  
          
            <Imfo />
  
          )
        })}
        <Bottom />
=======
        <Vivod data={data}/>
        <Bottom/>
>>>>>>> 1438346dc3cec352f4d54b68a4eee8751b4e33b5
      </div>
    );
  }
}


export default App;