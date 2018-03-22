import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';


class RightMenu extends Component {
render(){
    return (
<div className="rightMenu">
<center><h1>Приветствуем вас на сайте<br></br> вакансий</h1></center>
<hr></hr>
<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/GNOME_Web_logo.png" className="img_" alt="Логотип сайта"/></center> 

<button className="knopka1">
        Поиск 
</button>

<button className="knopka1">
        Поиск 
</button>

<button className="knopka1">
        Поиск 
</button>

<button className="knopka1">
        Поиск
</button>

<button className="knopka1">
        Поиск
</button>
    <hr></hr>
</div>
);
}
}


export default RightMenu;