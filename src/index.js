import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provide } from 'react-redux';
import {  Route, hashHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import About from "./About";
import App from "./App";


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/roster' component={About}/>
        </Switch>
    </main>
)


ReactDOM.render((
    <BrowserRouter>
        <Main />
    </BrowserRouter>
), document.getElementById('root'))