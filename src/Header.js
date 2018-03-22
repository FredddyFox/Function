import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';


class Header extends Component {
constructor(props){
    super(props);
    this.state={
        name: '', 
    };
    }

handleChange = event => {
this.setState({
    name: event.target.value,
});
};

render(){
    return (
        <div className="menu">
        <form className="form_">
         <input placeholder="Ввод информации:" className="pole" type="search" value={this.state.name}
          onChange={this.handleChange} />
        <button className="knopka" onClick={this.props.handleClickSearch(this.state.name)}>
        Поиск
    </button>
        <button className="reg">
        Поиск
    </button>
    </form>
    </div>
    )
  }
}

export default Header;