import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NotFound from 'components/NotFound';
import Home from 'views/Home';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;