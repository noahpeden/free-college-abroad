import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./app.css"
import {Link} from 'react-router'


const App = () => {
  return (
    <div>
      <header>Where Can You Get Your Degree For Free?</header>
      <h2>Click on a Region To See Countries that Offer Free University</h2>
      <h4><Link to="/Europe">Europe</Link></h4>
      <h4>South America</h4>
      <h4>Africa</h4>
      <h4>Asia</h4>
    </div>
  )
}

export default App;
