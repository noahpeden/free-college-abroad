const regionsReducer = (state = [], action) => {
  switch (action.type) {
    // case 'COUNTRY':
    // return action
    case 'COUNTRY':
    return action.country
    // let info = action.country.reduce((object, university)=>{
    //   return university
    // }, {})
    // return info
    default:
      return state
  }
}

export default regionsReducer;
