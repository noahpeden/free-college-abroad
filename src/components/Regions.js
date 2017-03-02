import React, { Component } from 'react'
import {Link} from 'react-router'
import africa from './assets/africa.jpg'
import centralAmerica from './assets/central-america.jpg'
import northAmerica from './assets/north-america.jpg'
import europe from './assets/europe.jpg'
import southAmerica from './assets/south-america.jpg'
import "./regions.css"




class Regions extends Component {
  constructor(){
    super()
    this.state = {
      countryID: 1,
    }
  }

  componentDidMount(){
    let collegeURL = `https://freecollegeapp.herokuapp.com/api/v1/countries`;
    fetch(collegeURL)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.props.setCountry(json)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render(){
    return (
      <div className="region-container">
        <div className="region">
            <div className="hovereffect">
                <img className="img-responsive" src={southAmerica} alt=""></img>
                    <div className="overlay">
                        <h2>South America</h2>

        				<p>
                  <Link to="/Argentina">Argentina</Link><br/>
                  <Link to="/Brazil">Brazil</Link><br/>
                  <Link to="/Uruguay">Uruguay</Link><br/>
                  <Link to="/Ecuador">Ecuador</Link>
        				</p>
                    </div>
            </div>
        </div>
        <div className="region">
            <div className="hovereffect">
                <img className="img-responsive" src={centralAmerica} alt=""></img>
                    <div className="overlay">
                        <h2>Central America</h2>

        				<p>
                  <Link to="/Panama">Panama</Link><br/>
        				</p>
                    </div>
            </div>
        </div>
        <div className="region">
            <div className="hovereffect">
                <img className="img-responsive" src={europe} alt=""></img>
                    <div className="overlay">
                        <h2>Europe</h2>
                <p>
                  <Link to="/Austria">Austria</Link><br/>
                  <Link to="/Czech_Republic">Czech Republic</Link><br/>
                  <Link to="/Denmark">Denmark</Link><br/>
                  <Link to="/Finland">Finland</Link><br/>
                  <Link to="/France">France</Link><br/>
                  <Link to="/Germany">Germany</Link><br/>
                  <Link to="/Iceland">Iceland</Link><br/>
                  <Link to="/Ireland">Ireland</Link><br/>
                  <Link to="/Luxembourg">Luxembourg</Link><br/>
                  <Link to="/Norway">Norway</Link><br/>
                  <Link to="/Slovenia">Slovenia</Link><br/>
                </p>
                    </div>
            </div>
        </div>
        <div className="region">
            <div className="hovereffect">
                <img className="img-responsive" src={northAmerica} alt=""></img>
                    <div className="overlay">
                        <h2>North America</h2>

        				<p>
                  <Link to="/Cuba">Cuba</Link><br/>
                  <Link to="/Mexico">Mexico</Link><br/>
        				</p>
                    </div>
            </div>
        </div>
        <div className="region">
            <div className="hovereffect">
                <img className="img-responsive" src={africa} alt=""></img>
                    <div className="overlay">
                        <h2>Africa</h2>
        				<p>
                  <Link to="/Morocco">Morocco</Link><br/>
                  <Link to="/Tunisia">Tunisia</Link><br/>
        				</p>
                    </div>
            </div>
        </div>
      </div>
      )
    }
  }

export default Regions;
