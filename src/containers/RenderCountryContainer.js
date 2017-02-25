import { connect } from 'react-redux';
import RenderCountry from "../components/RenderCountry"

const mapStateToProps = state => {
  console.log(state);
  // return an object of redux store data
  // that you'd like available in your component
  return {
    country: state
  };
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCountry);
