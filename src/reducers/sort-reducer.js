const SortReducer = (state = "ascend", action) => {
  switch (action.type) {
    case 'SET_ASCEND':
      state = "ascend";
      return state;
    case 'SET_DESCEND':
      state = "descend";
      return state;
    case 'SET_ALPHA':
      state = "alpha";
      return state;
    default:
      return state;
  }
}

export default SortReducer
