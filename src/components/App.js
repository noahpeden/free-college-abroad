import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./app.css"
import {Link} from 'react-router'
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'


const App = () => {
  return (
    <div>
      <HeaderContainer />
      <RegionsContainer />
    </div>
  )
}

export default App;
