import React, { Component } from 'react';
import  './App.css';
import Instagram from './img/instagram.svg';
import Youtube from './img/youtube.svg';
import Twitter from './img/twitter.svg';
import Google from './img/google-plus.svg';


class Bottom extends Component {
render(){
    return (
        <div className="bottom"><div className="img_wirawn">
        <img src={Instagram} className="img_soc"/>
        <img src={Youtube} className="img_soc_2"/><img src={Twitter} className="img_soc_4"/>
        <img src={Google} className="img_soc_3"/><p>Благодарим за посищение сайта(С)</p></div></div>
);
}
}


export default Bottom;