import React, { Component } from 'react'
import {Link} from 'react-router'
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
        <nav>
          <ul>
            <li><a href="#">Europe</a>
            <ul>
              <li><Link to="/Austria/"
              >Austria</Link></li>
              <li><Link to="/Czech_Republic/"
              >Czech Republic</Link></li>
              <li><Link to="/Denmark/"

              >Denmark</Link></li>
              <li><Link to="/Finland/"

              >Finland</Link></li>
              <li><Link to="/France/"

              >France</Link></li>
              <li><Link to="/Germany/"

              >Germany</Link></li>
              <li><Link to="/Iceland/"

              >Iceland</Link></li>
              <li><Link to="/Ireland/"

              >Ireland</Link></li>
              <li><Link to="/Luxembourg/"

              >Luxembourg</Link></li>
              <li><Link to="/Norway/"

              >Norway</Link></li>
              <li><Link to="/Slovenia/"

              >Slovenia</Link></li>
            </ul>
          </li>
          <li><a href="#">South America</a>
          <ul>
            <li><Link to="/Argentina">Argentina</Link></li>
            <li><Link to="/Brazil">Brazil</Link></li>
            <li><Link to="/Uruguay">Uruguay</Link></li>
            <li><Link to="/Ecuador">Ecuador</Link></li>
          </ul>
        </li>
        <li><a href="#">Central America</a>
        <ul>
          <li><Link to="/Panama">Panama</Link></li>
        </ul>
      </li>
      <li><a href="#">North America</a>
      <ul>
        <li> <Link to="/Cuba">Cuba</Link></li>
        <li><Link to="/Mexico">Mexico</Link></li>
      </ul>
    </li>
    <li><a href="#">Africa</a>
    <ul>
      <li><Link to="/Morocco">Morocco</Link></li>
      <li> <Link to="/Tunisia">Tunisia</Link></li>
    </ul>
  </li>
</ul>
</nav>
</div>
)
}
}

export default Regions;
