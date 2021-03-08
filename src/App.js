import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./views/Login/index";
import Index from "./views/Index/index";

import { isAuthenticated } from "./utils/Session";

const isLoggedIn = !!isAuthenticated();
const App = () => (
  <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      {isLoggedIn ? <Index /> : <Redirect push to="/login" />}
    </Route>
  </Switch>
);

export default App;
