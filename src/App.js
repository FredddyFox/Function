import React, { Component } from 'react';
import './App.css';
import RightMenu from './RightMenu';
import Bottom from './Bottom';
import Vivod from './Vivod';
import Header from './Header';
import About from "./About";
import axios from 'axios';

class App extends Component {

  state={
    name: '',
    loading: true,
  };

  getQuery = async (name) => {
    try {
      const response = await axios.get(`https://api.hh.ru/vacancies?text=${name}&&per_page=50&page=0`);
      const items =  await response.data.items;
      this.setState({data: items})
    } catch (error) {
      console.error(error);
    }
  }

handleClickSearch = name => event => {
  event.preventDefault(); 
  this.getQuery(name)
  };

  componentDidMount() {
this.getQuery(" ");
            }

  render(){
    const {data} = this.state;
    return (
      <div>
          <RightMenu/>
        <Header handleClickSearch={this.handleClickSearch}/>
        <div className="viravnivanie"></div>
          <div className="Content228">
          <Vivod data={data}/></div>
        <Bottom/>
      </div>
    );
  }
}


export default App;