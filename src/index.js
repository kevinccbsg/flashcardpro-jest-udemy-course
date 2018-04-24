import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/stack" component={Stack} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))