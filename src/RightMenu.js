import React, { Component } from 'react';
import  './App.css';
import About from "./About";

class RightMenu extends Component {
render(){
    return (
<div className="rightMenu">
<center><h2>Приветствуем вас на сайте<br/> вакансий</h2></center>
<hr/>
<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/GNOME_Web_logo.png" className="img_" alt="Логотип сайта"/></center>

<form action="/">
<button className="knopka1">
        Главное меню
</button>
</form>

<form action="/about">
<button className="knopka1">
О нас
</button>
</form>

<form action="/FormSearch">
    <button className="knopka1">
        Расширенный поиск
    </button>
</form>


<button className="knopka1">
        Поиск
</button>

<button className="knopka1">
        Поиск
</button>
</div>
);
}
}


export default RightMenu;