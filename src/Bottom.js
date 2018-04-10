import React, { Component } from 'react';
import  './App.css';
import Instagram from './img/instagram.svg';
import Youtube from './img/youtube.svg';
import Twitter from './img/twitter.svg';
import Google from './img/google-plus.svg';


class Bottom extends Component {
render(){
    return (
        <div className="bottom"><div>
        <a href="https://www.instagram.com/"><img src={Instagram} className="img_soc"/></a>
        <a href="http://www.youtube.com/"><img src={Youtube} className="img_soc_2"/></a>
        <a href="https://twitter.com/"><img src={Twitter} className="img_soc_4"/></a>
        <a href="https://www.google.com/intl/ru/gmail/about/"><img src={Google} className="img_soc_3"/></a>
        <p>Благодарим за посищение сайта(С)</p></div></div>
);
}
}


export default Bottom;