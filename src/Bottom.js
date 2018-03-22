import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import Instagram from './img/instagram.svg';
import Youtube from './img/youtube.svg';
import Twitter from './img/twitter.svg';
import Google from './img/google-plus.svg';


class Bottom extends Component {
render(){
    return (
<<<<<<< HEAD
        <div className="bottom"><div><img src={Instagram}
        className="img_soc"/><img src={Youtube} 
        className="img_soc_2"/><img src={Twitter} className="img_soc_4"/><img src={Google} 
        className="img_soc_3"/><p>Благодарим за посищение сайта(С)</p></div>
        </div>
=======
        <div className="bottom"><div className="img_wirawn">
        <img src={Instagram} className="img_soc"/>
        <img src={Youtube} className="img_soc_2"/><img src={Twitter} className="img_soc_4"/>
        <img src={Google} className="img_soc_3"/><p>Благодарим за посищение сайта(С)</p></div></div>
>>>>>>> 1438346dc3cec352f4d54b68a4eee8751b4e33b5
);
}
}


export default Bottom;