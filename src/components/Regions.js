import React, { Component } from 'react'
import {Link} from 'react-router'
import africa from './assets/africa.jpg'
import centralAmerica from './assets/central-america.jpg'
import northAmerica from './assets/north-america.jpg'
import europe from './assets/europe.jpg'
import southAmerica from './assets/south-america.jpg'
import "./regions.css"

const REGION_IMAGE = {
  'South America': southAmerica,
  "Central America": centralAmerica,
  'Europe': europe,
  'North America': northAmerica,
  'Africa': africa
}

const orderMap = {
  'North America':0,
  'South America':1,
  'Europe':2,
  'Africa':3,
  'Central America':4
};

class Regions extends Component {
  constructor(){
    super()
    this.state = {
      countryID: 1,
      regions: []
    }
  }



  componentDidMount(){
    const countriesUrl = `https://freecollegeapp.herokuapp.com/api/v1/countries`;
    const regionsUrl = `https://freecollegeapp.herokuapp.com/api/v1/regions`;

    Promise.all([fetch(countriesUrl).then((r) => r.json()), fetch(regionsUrl).then((r) => r.json())])
    .then(([countries, regions]) => {
      console.log(countries, regions);
      this.props.setCountry(countries)
      return regions.sort((a, b) => {
        return orderMap[a.region] - orderMap[b.region];
      }).map((region) => {
        region.countries = countries.filter((c) => c.region_id === region.id);
        return region;
      });
    }).then((response) => {
      this.setState({
        regions: response
      })
    })
  }

  mapCountry = (country) => (
    [<Link key={country.id} to={`/${country.name}`}>{country.name}</Link>, <br />]
  )

  mapRegion = (region) => {
    return (
      <div key={region.id} className="region">
        <div className="hovereffect">
          <img className="img-responsive" src={REGION_IMAGE[region.region]} alt=""></img>
          <div className="overlay">
            <h2>{region.region}</h2>
            <p>
              { region.countries.map(this.mapCountry) }
            </p>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div>
        <header className="mobile-header">Free Degree Finder</header>
        <div className="region-container">
          {this.state.regions.map(this.mapRegion)}
        </div>
      </div>
    )
  }
}

export default Regions;
