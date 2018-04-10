import React, { Component } from "react";
import "./App.css";
import RightMenu from "./RightMenu";
import Bottom from "./Bottom";
import Vivod from "./Vivod";
import Header from "./Header";
import About from "./About";
import axios from "axios";
import { getTracks } from "./actions/sort";
import {sort} from "./reducers/sort";
import { connect } from "react-redux";

class App extends Component {
  state = {
    name: "",
    loading: true
  };

  handleClickSearch = name => event => {
    event.preventDefault();
    this.props.getQuery(name);
  };

  // componentDidMount()
  // {
  //   this.getQuery(" ");
  // }

  render() {
    const { data } = this.state;
    console.log(this.props);
    return (
      <div>
        <RightMenu />
        <Header handleClickSearch={this.handleClickSearch} />
        <div className="viravnivanie" />
        <div className="Content228">
          <Vivod data={data} />
        </div>
        <Bottom />
      </div>
    );
  }
}


export default connect(
  state => ({
    tracks:
      state.sort &&
      state.sort.filter(sort => sort.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };

      dispatch({ type: "ADD_TRACK", payload });
    },
    getQuery: (name) => {
      async dispatch => {
        try {
          const response = await axios.get(
            `https://api.hh.ru/vacancies?text=${name}&&per_page=50&page=0&only_with_salary=true`
          );
          const items = await response.data.items;
          dispatch({ type: "RESPONSE_DATE", payload: items });
        } catch (error) {
          console.error(error);
        }
      };

    },

    onFindTrack: name => {
      console.log("name", name);
      dispatch({ type: "FIND_TRACK", payload: name });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    }
  })
)(App);