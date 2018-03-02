const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state = [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
      return state;
    case 'REMOVE_TODO':
      const index = state.findIndex(x => x.id === action.id);
      state = [
        ...state.slice(0, index),
        ...state.slice(index+1)
      ]
      return state;
    case 'TOGGLE_DONE':
      state = state.map(todo =>
        (action.id === todo.id) ? {...todo, done: !todo.done} : todo
      )
      return state;
    default:
      return state;
    case 'ORDER_ALPHA':
      state = state.sort(function compareAlpha(a, b) {
        return (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0);
      });
      return state;
    case 'ORDER_ACEND':
      state = state.sort(function compareAscend(a, b) {
        return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
      });
      return state;
    case 'ORDER_DESCEND':
      state = state.sort(function compareDescend(a, b) {
              return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0);
      });
      return state;
  }
}

export default TodoReducer
