import React from 'react'

import Todo from './todo'

const TodoList = ({ show, todos, onTodoClick, onDeleteClick }) => {
  return(
    <div className="list-of-todos">
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(this.id)}
          onDeleteClick={(e) => onDeleteClick(todo.id, e)}
          done={todo.done}
          show={show}
        />
      ))}
    </ul>
    </div>
  );
}

export default TodoList
