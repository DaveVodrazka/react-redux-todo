import React from 'react'

import {showClass} from '../actions/actions'

const Todo = ({ onClick, onDeleteClick, text, done, show }) => {
  return(
    <li
      onClick={onClick}
      className={showClass(done, show)}>
      <button onClick={onDeleteClick}>Delete</button>
      {text}
    </li>
  );
}

export default Todo
