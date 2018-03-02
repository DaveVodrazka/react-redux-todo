import React from 'react'
import {connect} from 'react-redux'

import TodoList from '../components/todo-list'
import AddForm from './add-form'
import ShowSwitch from './show-switch'
import {toggleTodo, removeTodo} from '../actions/actions'
import Sort from './sort'

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Úkolníček</h1>
        <AddForm />
        <ShowSwitch />
        <Sort />
        <TodoList
          todos={this.props.todos}
          onTodoClick={this.props.onTodoClick}
          onDeleteClick={this.props.onDeleteClick}
          show={this.props.show}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.TodoReducer,
    show: state.ShowReducer
  }
}

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onDeleteClick: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
