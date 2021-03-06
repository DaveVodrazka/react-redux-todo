import {loadState} from '../actions/actions'

const TodoReducer = (state = loadState(), action) => {
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
      return state

    case 'REMOVE_TODO':
      const index = state.findIndex(x => x.id === action.id)
      state = [
        ...state.slice(0, index),
        ...state.slice(index+1)
      ]
      return state

    case 'TOGGLE_DONE':
      state = state.map(todo =>
        (action.id === todo.id) ? {...todo, done: !todo.done} : todo
      )
      return state
    default:
      return state

    case 'ORDER_ALPHA':
      state = state.slice(0).sort(function compareAlpha(a, b) {
        return (a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0)
      })
      return state

    case 'ORDER_ACEND':
      state = state.slice(0).sort(function compareAscend(a, b) {
        return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)
      })
      return state

    case 'ORDER_DESCEND':
      state = state.slice(0).sort(function compareDescend(a, b) {
        return (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0)
      })
      return state

    case 'RE_INDEX':
      state = state.slice(0).sort(function compareAscend(a, b) {
        return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)
      })
      for (var i = 0; i < state.length; i++) {
        state[i].id = i
      }
      return state
  }
}

export default TodoReducer
