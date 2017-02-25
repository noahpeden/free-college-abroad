import React from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import RegionsContainer from '../containers/RegionsContainer'


const RenderCountry = (props) => {
  // switch (location.pathname) {
  //   case "/Country/Austria":
  //       apicall
  //     break;
  //   default:
  //
  // }


  let displayCountry = () => {
    if(props.country.length > 0) {
      return props.country.map((nation) => {
        console.log(nation);
        return (
          <div className="card">
            <ul>
              <h2>{nation.name}</h2>
              <li>{nation.tuition_fee}</li>
              <li>{nation.application_fee}</li>
              {/* TODO: FIX VISA BOOLEAN VALUE */}
              <li>{nation.visa}</li>
            </ul>
          </div>
      )}
    )
  }
}
return (
  <div>
    <HeaderContainer />
    <RegionsContainer />
    {displayCountry()}
  </div>
)
}

export default RenderCountry;
