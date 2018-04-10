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
        loading: true,
        text:"",
        cityName: "",
        dost: "",
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
handleChangeDost = event => {
this.setState({
    dost: event.target.value,
});
};

getQuery = async () => {
try {
    let response;
    if (this.state.cityName){
    const response2 = await axios.get(`https://api.hh.ru/suggests/areas?text=${this.state.cityName}`);
    const cityID = await response2.data.items[0].id
    response = await axios.get(`https://api.hh.ru/vacancies?text=${this.state.text}&area=${cityID}`);
    }
    else if(this.state.text) {
    response = await axios.get(`https://api.hh.ru/vacancies?text=${this.state.text}`);
    }else
    { 
    response = await axios.get(`https://api.hh.ru/vacancies?text=${this.state.dost}`);
    }
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
       <form action="" method="post" class="search">
           <p>Профессия:</p>
        <input type="search" name="" placeholder="поиск" class="input" value={this.state.text}
                       onChange={this.handleChangeText}/>
           <p>Город:</p>
        <input type="search" name="" placeholder="поиск" class="input" value={this.state.cityName}
                       onChange={this.handleChangeCity}/>
           <p>Доступность:</p>
        <input type="search" name="" placeholder="поиск" class="input" value={this.state.dost}
                       onChange={this.handleChangeDost}/>
           <br/>
           <br/>
           <button className="search" onClick={this.handleClickSearch}>
               Поиск
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
