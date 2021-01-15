import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NotFound from 'components/NotFound';
import Home from 'views/Home';
import TutorialDetail from 'components/TutorialDetail';
import AddTutorial from 'components/AddTutorial';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutorial/:id" component={TutorialDetail} />
          <Route exact path="/agregar" component={AddTutorial} />
          <Route exact path="/editar" component={AddTutorial} />
          <Route path='*' component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;