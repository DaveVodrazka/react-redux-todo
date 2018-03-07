/**
 * @jest-environment node
 */

import {testFunction} from './example'

test('Test function from the example file.', () => {
  expect(testFunction(1, 2)).toBe(7)
})
