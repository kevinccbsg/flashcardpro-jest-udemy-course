import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';


render((
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/stack" component={Stack} />
    </Switch>
  </Router>
), document.getElementById('root'))