import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateUser = () => {
    axios.post("/api/user", {
      username: this.state.username, //taking username ans password from state and putting them on the body
      password: this.state.password
    });
    this.props.history.replace("/dashboard");
  };

  handleLoginUser = () => {
    axios.post("/api/loginUser", {
      username: this.state.username,
      password: this.state.password
    });
    this.props.history.replace("/dashboard");
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          name="username"
          value={username}
          onChange={this.handleInputChange}
          placeholder=" Username"
          className="input"
        />
        <input
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder=" Password"
          className="input"
        />
        <br />
        <br />

        <button
          className="btn btn-success "
          style={{ marginRight: "30px" }}
          onClick={this.handleLoginUser}
        >
          Login
        </button>
        <button className="btn btn-danger" onClick={this.handleCreateUser}>
          Register
        </button>
      </div>
    );
  }
}
export default Auth;
