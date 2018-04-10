import React, { Component } from "react";
import "./App.css";
import RightMenu from "./RightMenu";
import Bottom from "./Bottom";
import Vivod from "./Vivod";
import Header from "./Header";
import About from "./About";
import axios from "axios";
import { getTracks } from "./actions/sort";
import sort from "./reducers/sort";
import { connect } from "react-redux";
import { dispatch } from 'redux'
import objectSort from "./reducers/objectSort";

class App extends Component {
  state = {
    name: "",
    loading: true
  };

  handleClickSearch = name => event => {
    event.preventDefault();
    this.props.getQuery(name);
  };

  componentDidMount()
  {
    this.props.getQuery(" ");
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <RightMenu />
        <Header handleClickSearch={this.handleClickSearch} />
        <div className="viravnivanie" />
        <div className="Content228">
          <Vivod data={this.props.items} />
        </div>
        <Bottom />
      </div>
    );
  }
}


export default connect(
  state => ({
    items: state.sort,
  }),
  dispatch => ({
    onAddTrack: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };

      dispatch({ type: "ADD_TRACK", payload });
    },
    getQuery: async (name) => {
        try {
          const response = await axios.get(
            `https://api.hh.ru/vacancies?text=${name}&&per_page=50&page=0&only_with_salary=true`
          );
          const items = await response.data.items;
          console.log('items',items);
          dispatch({ type: "RESPONSE_DATE", payload: items });
        } catch (error) {
          console.error(error);
        }
    },

    onFindTrack: name => {
      console.log("name", name);
      dispatch({ type: "FIND_TRACK", payload: name });
    },
    onGetTracks: () => {
      dispatch(objectSort());
    }
  })
)(App);
