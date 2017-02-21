import React from 'react';
import { Router, Route } from 'react-router';
import AppContainer from './containers/AppContainer'
import EuropeContainer from './containers/EuropeContainer'

import App from './components/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/Europe" component={EuropeContainer} />
  </Router>
);

export default Routes;
