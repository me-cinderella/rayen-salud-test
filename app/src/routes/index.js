import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NotFound from 'components/NotFound';
import TutorialsList from 'components/TutorialsList';
import TutorialDetail from 'components/TutorialDetail';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={TutorialsList} />
          <Route path="/tutorial/:id" component={TutorialDetail} />
          <Route path='*' component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;