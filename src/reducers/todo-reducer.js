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
  }
}

export default TodoReducer
