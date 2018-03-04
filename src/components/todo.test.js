/**
 * @jest-environment node
 */
import React from 'react'
import Todo from './todo'
jest.mock('../actions/actions')

test('Render Todo item', () => {
  expect(Todo({ onClick, onDeleteClick, text, done, show })).toBe(
    <li
      onClick={onClick}
      className={showClass(false, "all")}>
      <button className="delete" onClick={onDeleteClick}>X</button>
      {"ahoj"}
    </li>
  )
})
