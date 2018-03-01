const ShowReducer = (state = "all", action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      state = "active";
      return state;
    case 'SET_DONE':
      state = "done";
      return state;
    case 'SET_ALL':
      state = "all";
      return state;
    default:
      return state;
  }
}

export default ShowReducer
