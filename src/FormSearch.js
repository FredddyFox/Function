import React, { Component } from 'react';
import './App.css';
import RightMenu from './RightMenu';
import Bottom from './Bottom';
import Vivod2 from './Vivod2';
import axios from 'axios';

export default class FormSearch extends Component {
    
state={
    name: '',
    date: [],
    text:'',
    loading: true,
    cityName: "",
    prof: '',
  };

componentDidMount = async () => {
    this.getQuery()
  }

handleChangeText = event => {
this.setState({
    text: event.target.value,
});
};

handleChangeCity = event => {
    this.setState({
        cityName: event.target.value,
    });
    };

handleChangeProf = event => {
    this.setState({
        prof: event.target.value,
    });
};


getQuery = async () => {
try {
    const response2 = await axios.get(`https://api.hh.ru/suggests/areas?text=${this.state.cityName}`);
    const cityID = await response2.data.items[0].id
    const response = await axios.get(`https://api.hh.ru/vacancies?text=${this.state.text}&area=${cityID}&salary=${this.state.prof}&only_with_salary=true`);
    const items =  await response.data.items;
    this.setState({data: items})
} catch (error) {
  console.error(error);
}
}


handleClickSearch = event => {
  event.preventDefault();
  this.getQuery()
  };

    render(){

        const {data} = this.state;

return (
    <div>
        <RightMenu/>
        <div className="HeaderStandart">
            <center><h1>Wacansies.com</h1></center>
        </div>
        <div className="viravnivanie"/>
        <div className="Content228">

<div className="Search">
    <br/>
    <center><h1>Для поиска введите данные в поля:</h1></center>
   <center><div className="ramka">
       <form action="" method="post" className="search">
           <p>Профессия:</p>
        <input type="search" name="" placeholder="поиск" className="input" value={this.state.text}
                       onChange={this.handleChangeText}/>
           <p>Город:</p>
        <input type="search" name="" placeholder="поиск" className="input" value={this.state.cityName}
                       onChange={this.handleChangeCity}/>
           <p>Зарплата:</p>
        <input type="search" name="" placeholder="поиск" className="input" value={this.state.prof}
                       onChange={this.handleChangeProf}/>
           <br/>
           <br/>
           <button className="search" onClick={this.handleClickSearch}>
               Найти
           </button>
       </form>
            </div></center>
   <Vivod2 data={this.state.data}/>
</div>
                </div>
                <Bottom/>
    </div>
        );
    }
}