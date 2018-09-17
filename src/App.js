import React, { Component } from "react";

// Components---------------------------
import "./App.css";
import "./components/Auth/auth.css";
import Nav from "./components/Nav/Nav";
//--------------------------------------

//Files---------------------------------
import routes from "./routes";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
//--------------------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {this.props.location.pathname !== "/" && <Nav />}
          <div>{routes}</div>
        </div>
      </div>
    );
  }
}

const propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(App);
