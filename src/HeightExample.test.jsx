import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HeightExample } from './HeightExample';

test('match the height when clicked', () => {
  const { getByText } = render(<HeightExample />)
  const button = getByText(/Set height/i)

  Object.defineProperty(button, 'getBoundingClientRect', { value: () => ({ height: 50 })})
  fireEvent.click(button)

  expect(getByText(/I'm the same height/i).getAttribute('style')).toMatch(/min-height: 50px/)
})