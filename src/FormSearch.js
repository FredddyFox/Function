import React, { Component } from 'react';
import './App.css';
import RightMenu from './RightMenu';
import Bottom from './Bottom';
import Vivod2 from './Vivod2';
import axios from 'axios';
import { getTracks } from "./actions/sort";
import sort from "./reducers/sort";
import { connect } from "react-redux";
import { dispatch } from 'redux'
import objectSort from "./reducers/objectSort";

 class FormSearch extends Component {
  
    state={
        name: '',
        date: [],
        loading: true,
        text:"",
        cityName: "",
        dost: "",
      };

    componentDidMount = async () => {
        this.props.getQuery()
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

    handleClickSearch = event => {
      event.preventDefault();
      this.props.getQuery(this.state.cityName,this.state.text );
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
        <input type="search" name="" placeholder="поиск" className="input" value={this.state.text}
                       onChange={this.handleChangeText}/>
           <p>Город:</p>
        <input type="search" name="" placeholder="поиск" className="input" value={this.state.cityName}
                       onChange={this.handleChangeCity}/>
           <p>Доступность:</p>
        <input type="search" name="" placeholder="поиск" className="input" value={this.state.dost}
                       onChange={this.handleChangeDost}/>
           <br/>
           <br/>
           <button className="search" onClick={this.handleClickSearch}>
               Поиск
           </button>
    </form>
   </div></center>
   <Vivod2 data={this.props.items}/>
</div>
                </div>
                <Bottom/>
            </div>
        );
    }
}




export default connect(
    state => ({
      items: state.sort,
    }),
    dispatch => ({
      onAddTrack: name => {
        const payload = {
          id: Date.now().toString(),
          name
        };

        dispatch({ type: "ADD_TRACK", payload });
      },
      getQuery : async (cityName, text, dost) => {
        try {
            let response;
            if (cityName){
            const response2 = await axios.get(`https://api.hh.ru/suggests/areas?text=${cityName}`);
            const cityID = await response2.data.items[0].id
            response = await axios.get(`https://api.hh.ru/vacancies?text=${text}&area=${cityID}&per_page=50&page=0`);
            }
            else if(text) {
            response = await axios.get(`https://api.hh.ru/vacancies?text=${text}&per_page=50&page=0`);
            }else
            {
            response = await axios.get(`https://api.hh.ru/vacancies?text=${dost}&per_page=50&page=0`);
            }
            const items =  await response.data.items;
          dispatch({ type: "RESPONSE_SEARCH", payload: items });
        } catch (error) {
          console.error(error);
        }
      },

    })
  )(FormSearch);




