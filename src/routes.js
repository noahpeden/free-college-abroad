import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import RenderCountryContainer from './containers/RenderCountryContainer';
import About from './components/About'


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/" component={AppContainer} />
    <Route path="/about" component={About}/>
      <Route path="/:country" component={RenderCountryContainer}/>
  </Router>
);

export default Routes;
