const regionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'COUNTRY':
    return action.country
    default:
      return state
  }
}

export default regionsReducer;
