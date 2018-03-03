import React from 'react'

import {showClass} from '../actions/actions'

const Todo = ({ onClick, onDeleteClick, text, done, show }) => {
  return(
    <li
      onClick={onClick}
      className={showClass(done, show)}>
      <button className="delete" onClick={onDeleteClick}>X</button>
      {text}
    </li>
  );
}

export default Todo
