import { connect } from 'react-redux';
import { country } from '../actions'
import Regions from "../components/Regions"

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {
    setCountry: (json)=>{
      dispatch(country(json))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
