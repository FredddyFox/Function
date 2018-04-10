import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provide } from "react-redux";
import { Route, hashHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import FormSearch from "./FormSearch";
import { Link, Router } from "react-router";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./App";
import "./index.css";
import reducer from "./reducers";
import About from "./About";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


console.log(store.getState());

const Main = () => (
  <main>
   <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/FormSearch" component={FormSearch} />
    </Switch>
  </main>
);

 <Router history={HashRouter}>
            <Route path="/" component={App}/>
            <Router path="/about" component={About}/>
            </Router>

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
