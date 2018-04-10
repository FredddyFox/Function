import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import FormSearch from "./FormSearch";
import About from "./About";
import App from "./App";


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

 const Main = () => (
  <main>
          <Route exact path='/' component={App}/>
          <Route path='/about' component={About}/>
          <Route path='/FormSearch' component={FormSearch}/>
  </main>
);
console.log(store.getState());  
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
</Provider>,  
  document.getElementById('root')
);  