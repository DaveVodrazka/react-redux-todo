import { combineReducers } from 'redux'

import TodoReducer from './todo-reducer'
import ShowReducer from './show-reducer'

export default combineReducers({
  TodoReducer,
  ShowReducer
})
