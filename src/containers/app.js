import React from 'react'
import {connect} from 'react-redux'

import TodoList from '../components/todo-list'
import AddForm from './add-form'
import ShowSwitch from './show-switch'
import {toggleTodo, removeTodo, reIndex} from '../actions/actions'
import Sort from './sort'

class App extends React.Component {
  constructor(props) {
  super(props)
  this.onUnload = this.onUnload.bind(this)
  }

  render() {
    return(
      <main>
        <header>
          <h1>Seznam Úkolů</h1>
          <div className="forms">
            <AddForm />
            <ShowSwitch />
            <Sort />
          </div>
        </header>
        <TodoList
          todos={this.props.todos}
          onTodoClick={this.props.onTodoClick}
          onDeleteClick={this.props.onDeleteClick}
          show={this.props.show}
        />
      </main>
    );
  }
  onUnload(event) {
    this.props.reIndex()
    localStorage.setItem("todoStorage", JSON.stringify(this.props.todos))
  }

  componentDidMount() {
    //addEventListener for app termination
    window.addEventListener("beforeunload", this.onUnload)
  }

  componentWillUnmount() {
    //Run onUnload when the app is about to be terminated
    window.removeEventListener("beforeunload", this.onUnload)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.TodoReducer,
    show: state.ShowReducer,
  }
}

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onDeleteClick: removeTodo,
  reIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
