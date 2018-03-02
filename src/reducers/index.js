import { combineReducers } from 'redux'

import TodoReducer from './todo-reducer'
import ShowReducer from './show-reducer'
import SortReducer from './sort-reducer'

export default combineReducers({
  TodoReducer,
  ShowReducer,
  SortReducer
})
