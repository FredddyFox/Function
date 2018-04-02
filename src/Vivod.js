import React, { Component } from 'react';
import  './App.css';

export default class Vivod extends Component {

render() {

const {data} = this.props;
return (

    <div>
    {data && data.map((data,index) => {
        let HTML = '';
        let all = {from : data.salary.from, to: data.salary.to};
        let ot = (data.salary && data.salary.from);
        let du = (data.salary && data.salary.to);
        if (ot === null) {
            HTML =
                <tr>
                    <td><p>Зарплата: До:{du} Рублей</p></td>
                </tr>

        } else if (du === null) {
            HTML =
                <tr>
                    <td><p>Зарплата: От:{ot} Рублей</p></td>
                </tr>
        } else {
            HTML =
                <tr>
                    <td><p>Зарплата: От:{all.from} -
                        До:{all.to} Рублей</p></td>
                </tr>
        }
        return (
      <div key={index}>
      <div className="vivod">
        <div><tr><th><h2><a href={data.alternate_url}>{data.name}</a></h2></th></tr></div>
        <div><hr/><tr><td><p>Требования:{data.snippet.requirement}</p></td></tr></div>
        <div><tr><td><p>Город:{data.area.name}</p></td></tr></div>
          <div>{HTML}</div>
          </div>
        </div>
        )
    })}
    </div>
)}};