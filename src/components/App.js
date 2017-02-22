import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./app.css"
import {Link} from 'react-router'


const App = () => {
  return (
    <div>
      <header>Global Degree For Free</header>
      <h2>Put video background here</h2>
      <div className="region-container">
        <div className="dropdown">
          <button className="dropbtn">Europe</button>
          <div className="dropdown-content">
            <a href="#">Austria</a>
            <a href="#">Czech Republic</a>
            <a href="#">Denmark</a>
            <a href="#">Finland</a>
            <a href="#">France</a>
            <a href="#">Germany</a>
            <a href="#">Iceland</a>
            <a href="#">Ireland</a>
            <a href="#">Luxembourg</a>
            <a href="#">Norway</a>
            <a href="#">Slovenia</a>
            <a href="#">Sweden</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">South America</button>
          <div className="dropdown-content">
            <a href="#">Argentina</a>
            <a href="#">Brazil</a>
            <a href="#">Uruguay</a>
            <a href="#">Ecuador</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Central America</button>
          <div className="dropdown-content">
            <a href="#">Panama</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">North America</button>
          <div className="dropdown-content">
            <a href="#">Cuba</a>
            <a href="#">Mexico</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Africa</button>
          <div className="dropdown-content">
            <a href="#">Morocco</a>
            <a href="#">Tunisia</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
