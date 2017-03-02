import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'
import './render.css'

class RenderCountry extends Component {
    render(){
      return (
        <div>
          <RegionsContainer />
          This is about me.
        </div>
      )
    }
  }

export default RenderCountry;
