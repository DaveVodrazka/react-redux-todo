import React from 'react'
import {connect} from 'react-redux'

import TodoList from '../components/todo-list'
import AddForm from './add-form'
import ShowSwitch from './show-switch'
import {toggleTodo, removeTodo} from '../actions/actions'

class App extends React.Component {
  render() {
    return(
      <div>
        <AddForm />
        <ShowSwitch />
        <TodoList
          todos={this.props.todos}
          onTodoClick={this.props.onTodoClick}
          onDeleteClick={this.props.onDeleteClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.TodoReducer
  }
}

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onDeleteClick: removeTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
