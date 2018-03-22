import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';

export default class Vivod extends Component {
render() {
const {data} = this.props;
return (
    <div>
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
    </div>
)}};