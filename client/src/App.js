import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/colors' component={BubblePage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
