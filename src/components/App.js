import React from 'react';
import "./app.css"
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'
import {Link} from 'react-router'


const App = (props) => {

  return (
    <div>
      <HeaderContainer />
      <RegionsContainer />
    </div>
  )
}

export default App;
