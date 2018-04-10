import React, { Component } from 'react';
import './index.js';
import RightMenu from "./RightMenu";

export default class About extends Component{
    render(){
        return (
<div>
    <RightMenu />
            <div className="we">
                <center><p><font size="6">Контактная информация</font><hr/></p>
                    <p><br/>Россия</p>
                <br/>ООО «СуперДжоб»
                <br/>127006, Москва, Малая Дмитровка, 20
                <br/>ст. м. Чеховская
                <br/> В Москве многоканальный
                <br/>+ 7 495 790-72-77
                <br/>  В России бесплатный
                    <br/>  8 800 200-72-77

                <p><br/>Узбекистан</p>
                <br/>100015, РУз, Ташкент, ул. Афросиаб 12, офис 83
                <br/>vip@superjob.uz
                <br/> В Ташкенте многоканальные
                <br/>(998-71) 129-14-44
                <br/>(998-71) 232-14-44</center>
            </div>
</div>
        )
    }
}
