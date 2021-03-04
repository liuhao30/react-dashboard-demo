import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./views/login";
const App = () => (
  <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
  </Switch>
);

export default App;
