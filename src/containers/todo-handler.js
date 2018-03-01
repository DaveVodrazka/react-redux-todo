import React from 'react'
import {connect} from 'react-redux'

import {todoClick} from '../actions/actions'
import TodoList from '../components/todo-list'

const mapStateToProps = (state) => {
  return {
    show: state.ShowReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoClick
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
