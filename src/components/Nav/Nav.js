import React, { Component } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/dashboard">
        <button className="btn btn-secondary">Home</button>
      </Link>

      <Link to="/post/:postid">
        <button className="btn btn-secondary">Post </button>
      </Link>
      <Link to="/">
        <button className="btn btn-secondary">Logout </button>
      </Link>
    </div>
  );
}

export default Nav;
