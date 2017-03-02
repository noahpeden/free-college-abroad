import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'
import './render.css'


class RenderCountry extends Component {
  constructor(){
    super()
    this.state = {
      university: []
    }
  }

  // in componentdidmount grab the parameter from the route, map through based on the parameter that you pulled from the route


  // switch (location.pathname) {
  //   case "/Country/Austria":
  //       apicall
  //     break;
  //   default:
  //
  // }``
  // 141 "Argentina", 142 "Brazil", 143 "Ecuador, 144 "Uruguay", 145 "Austria", "146 "Czech Republic", 147 "Denmark", 148 "Finland", 149 "France", 150 "Germany", 151 "Iceland", 152 "Ireland", 153 "Luxembourg", 154 "Norway", 155 "Slovenia", 156 "Morocco", 157 "Tunisia", 158 "Cuba", 159 "Mexico", 160 "Panama"


  getUniversity(nationID, data){
    if(nationID){
    let collegeURL = `https://freecollegeapp.herokuapp.com/api/v1/countries/${nationID}/universities`;
    fetch(collegeURL)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.setState({
        university: json
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  }

  displayCountry(nationID){
      if(this.props.country.length > 0) {
        let countryID = this.props.country.find((nation) => {
            return this.props.routeParams.country === nation.name
          })
          let nationID = countryID.id
          return this.getUniversity(nationID);
      }
    }

    render(){
      return (
        <div>
          <RegionsContainer />
        <h1>{this.props.routeParams.country}</h1>
        <div className="university-container">
          {this.displayCountry()}
          {this.state.university.length > 0 && this.state.university.map((country) => {
            return (
              <div className="university-card">
              <div>University: {country.name}</div>
              <div>Tuition: {country.tuition_fee}</div>
              <div>Application Fee: {country.application_fee}</div>
              <div>Visa: {country.visa}</div>
              <div>Course Language: {country.language}</div>
              <div>City: {country.city}</div>
              <div>University Website: <a href={country.uni_website}>{country.uni_website}</a></div>
            </div>
            )
          })}
          </div>
        </div>
      )
    }
  }

export default RenderCountry;
