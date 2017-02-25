import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer'
import RenderCountryContainer from './containers/RenderCountryContainer'


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AppContainer} />
    <Route path="/Country" component={AppContainer} />
      <Route path="/Country/Austria" component={RenderCountryContainer}/>
      <Route path="/Country/Argentina" component={RenderCountryContainer}/>
      <Route path="/Country/Brazil" component={RenderCountryContainer}/>
      <Route path="/Country/Cuba" component={RenderCountryContainer}/>
      <Route path="/Country/Czech_Republic" component={RenderCountryContainer}/>
      <Route path="/Country/Denmark" component={RenderCountryContainer}/>
      <Route path="/Country/Ecuador" component={RenderCountryContainer}/>
      <Route path="/Country/Finland" component={RenderCountryContainer}/>
      <Route path="/Country/France" component={RenderCountryContainer}/>
      <Route path="/Country/Germany" component={RenderCountryContainer}/>
      <Route path="/Country/Iceland" component={RenderCountryContainer}/>
      <Route path="/Country/Ireland" component={RenderCountryContainer}/>
      <Route path="/Country/Luxembourg" component={RenderCountryContainer}/>
      <Route path="/Country/Mexico" component={RenderCountryContainer}/>
      <Route path="/Country/Morocco" component={RenderCountryContainer}/>
      <Route path="/Country/Panama" component={RenderCountryContainer}/>
      <Route path="/Country/Slovenia" component={RenderCountryContainer}/>
      <Route path="/Country/Tunisia" component={RenderCountryContainer}/>
      <Route path="/Country/Uruguay" component={RenderCountryContainer}/>
  </Router>
);

export default Routes;
