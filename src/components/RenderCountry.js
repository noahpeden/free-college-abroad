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
        <h1 className="title">Free Degree Options in: {this.props.routeParams.country}</h1>
        <div className="university-container">
          {this.displayCountry()}
          {this.state.university.length > 0 && this.state.university.map((country) => {
            return (
              <div className="university-card">
              <h3 className="university-name">University: {country.name}</h3>
              <div><strong>Tuition:</strong> {country.tuition_fee}</div>
              <div><strong>Application Fee:</strong> {country.application_fee}</div>
              <div><strong>Course Language:</strong> {country.language}</div>
              <div><strong>City:</strong> {country.city}</div>
              <div><button><a href={country.uni_website}><strong>Link to University Website</strong></a></button></div>
            </div>
            )
          })}
          </div>
        </div>
      )
    }
  }

export default RenderCountry;
