import React from 'react';
import "./app.css"
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'
import {Link} from 'react-router'


const App = () => {

  return (
    <div>
      <RegionsContainer />
      <HeaderContainer />
    </div>
  )
}

export default App;
