import React from 'react'
import {Link} from 'react-router'

const nomadURL = "https://restcountries.eu/rest/v1/region/europe"

const getNomadList = (nomadURL) => {
  fetch(nomadURL)
  .then((response) => {
    return response.json()
  })
    .then((json) => {
       console.log(json[0].name)
    })
    .catch((error) => {
      console.log(error)
    })
  }

const Regions = () => {


  return (
  <div className="region-container">
    <div className="dropdown">
      <button className="dropbtn" onClick={() => getNomadList(nomadURL)}>
        Europe
      </button>
      <div className="dropdown-content">
        <Link to="">Austria</Link>
        <Link to="">Czech Republic</Link>
        <Link to="">Denmark</Link>
        <Link to="">Finland</Link>
        <Link to="">France</Link>
        <Link to="">Germany</Link>
        <Link to="">Iceland</Link>
        <Link to="">Ireland</Link>
        <Link to="">Luxembourg</Link>
        <Link to="">Norway</Link>
        <Link to="">Slovenia</Link>
        <Link to="">Sweden</Link>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">South America</button>
      <div className="dropdown-content">
        <Link to="">Argentina</Link>
        <Link to="">Brazil</Link>
        <Link to="">Uruguay</Link>
        <Link to="">Ecuador</Link>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Central America</button>
      <div className="dropdown-content">
        <Link to="">Panama</Link>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">North America</button>
      <div className="dropdown-content">
        <Link to="">Cuba</Link>
        <Link to="">Mexico</Link>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Africa</button>
      <div className="dropdown-content">
        <Link to="">Morocco</Link>
        <Link to="">Tunisia</Link>
      </div>
    </div>
  </div>
)
}

export default Regions;
