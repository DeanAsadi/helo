import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";
import Auth from "./components/Auth/Auth";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/post/:postid" component={Post} />
    <Route path="/form" component={Form} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
