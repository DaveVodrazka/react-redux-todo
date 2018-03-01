import React from 'react'

const Todo = ({ onClick, onDeleteClick, text, done }) => {
  return(
    <li
      onClick={onClick}
      style={{
        textDecoration: done ? 'line-through' : 'none'
      }}>
      {text}
      <button onClick={onDeleteClick}>Delete</button>
    </li>
  );
}

export default Todo
