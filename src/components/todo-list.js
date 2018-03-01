import React from 'react'

import Todo from './todo'

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => {
  return(
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDeleteClick={(e) => onDeleteClick(todo.id, e)}
          done={todo.done}
        />
      ))}
    </ul>
  );
}

export default TodoList
