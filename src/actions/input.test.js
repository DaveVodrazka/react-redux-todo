/**
 * @jest-environment node
 */

import {checkInput} from './actions'

test('adds 1 + 2 to equal 3', () => {
  expect(checkInput("Ahoj")).toBe(true)
})
