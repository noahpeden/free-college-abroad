import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'
import './render.css'

class RenderCountry extends Component {
    render(){
      return (
        <div>
          <RegionsContainer />
          <div className="about-text">Free Degree Finder's mission is to show those who do not want thousands upon thousands of dollars of college debt (namely Americans) that there are other options for getting an undergraduate degree. Around the world there are more than a dozen countries that offer completely free (or close to it) college tuition for foreigners (Americans) with high quality classes that are often in English. Browse through the regions and countries to see what your options abroad are!

          This is mainly for Americans who don't think they have any other options besides crushing debt.
        </div>
        </div>
      )
    }
  }

export default RenderCountry;
