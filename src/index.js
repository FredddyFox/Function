import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hi from './Hi';
import {Route, Router}from 'react-router';



ReactDOM.render((
     <div>
         <Router>
            <Route path="/App" component= {App}/>
            <Route path="/Hi" component= {Hi}/>
         </Router>
        </div>


), document.getElementById( 'root' ) );


