import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../views/Home/index";
import { isAuthenticated } from "../../utils/Session";

const isLoggedIn = !!isAuthenticated();

const ContentMain = () => {
  return (
    <div style={{ padding: 16, position: "relative" }}>
      <Switch>
        <Route exact path="/home">
           {isLoggedIn ? <Home /> : <Redirect push to="/login" />}
        </Route>

        <Redirect exact from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default ContentMain;
