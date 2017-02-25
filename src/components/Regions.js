import React, { Component } from 'react'
import {Link} from 'react-router'




class Regions extends Component {
  constructor(){
    super()
    this.state = {
      countryID: 1,
    }
  }

  componentDidMount(){

  }

  getAPI(num){

    let collegeURL = `https://freecollegeapp.herokuapp.com/api/v1/countries/${num}/universities`;
    fetch(collegeURL)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json);
      this.props.setCountry(json)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render(){
    return (
      <div className="region-container">
        <div className="dropdown">
          <button className="dropbtn europe">
            Europe
          </button>
          <div className="dropdown-content">
            <Link to="/Country/Austria/"
            onClick={(e) => this.getAPI(1)}
            >Austria</Link>
            <Link to="/Country/Czech_Republic/"
            onClick={(e) => this.getAPI(7)}
            >Czech Republic</Link>
            <Link to="/Country/Denmark/"
            onClick={(e) => this.getAPI(8)}
            >Denmark</Link>
            <Link to="/Country/Finland/"
            onClick={(e) => this.getAPI(9)}
            >Finland</Link>
            <Link to="/Country/France/"
            onClick={(e) => this.getAPI(10)}
            >France</Link>
            <Link to="/Country/Germany/"
            onClick={(e) => this.getAPI(11)}
            >Germany</Link>
            <Link to="/Country/Iceland/"
            onClick={(e) => this.getAPI(12)}
            >Iceland</Link>
            <Link to="/Country/Ireland/"
            onClick={(e) => this.getAPI(13)}
            >Ireland</Link>
            <Link to="/Country/Luxembourg/"
            onClick={(e) => this.getAPI(14)}
            >Luxembourg</Link>
            <Link to="/Country/Norway/"
            onClick={(e) => this.getAPI(15)}
            >Norway</Link>
            <Link to="/Country/Slovenia/"
            onClick={(e) => this.getAPI(16)}
            >Slovenia</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn south-america">South America</button>
          <div className="dropdown-content">
            <Link to="/Country/Argentina" onClick={(e) => this.getAPI(2)}>Argentina</Link>
            <Link to="/Country/Brazil" onClick={(e) => this.getAPI(3)}>Brazil</Link>
            <Link to="/Country/Uruguay" onClick={(e) => this.getAPI(5)}>Uruguay</Link>
            <Link to="/Country/Ecuador" onClick={(e) => this.getAPI(4)}>Ecuador</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn central-america">Central America</button>
          <div className="dropdown-content">
            <Link to="/Country/Panama" onClick={(e) => this.getAPI(6)}>Panama</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn north-america">North America</button>
          <div className="dropdown-content">
            <Link to="/Country/Cuba" onClick={(e) => this.getAPI(20)}>Cuba</Link>
            <Link to="/Country/Mexico" onClick={(e) => this.getAPI(19)}>Mexico</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn africa">Africa</button>
          <div className="dropdown-content">
            <Link to="/Country/Morocco" onClick={(e) => this.getAPI(16)}>Morocco</Link>
            <Link to="/Country/Tunisia" onClick={(e) => this.getAPI(18)}>Tunisia</Link>
          </div>
        </div>
      </div>
    )
   }
  }

  export default Regions;
