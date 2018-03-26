import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provide } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, hashHistory} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import About from "./About";
import App from "./App";

const Appl = () => (
    <div>
        <Header />
        <Main />
    </div>
)

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/roster' component={About}/>
        </Switch>
    </main>
)

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>App</Link></li>
                <li><Link to='/roster'>About</Link></li>
            </ul>
        </nav>
    </header>
)


ReactDOM.render((
    <BrowserRouter>
        <Appl />
    </BrowserRouter>
), document.getElementById('root'))