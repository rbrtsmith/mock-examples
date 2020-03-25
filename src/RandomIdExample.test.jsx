import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { v4 } from 'uuid'

import { RandomIdExample } from './RandomIdExample';

jest.mock('uuid', () => ({
  v4: jest.fn()
}))


test('render prepended random id when clicked', () => {
  v4.mockReturnValue('fake-id')
  const { queryByText } = render(<RandomIdExample />)
  expect(queryByText('ID-fake-id')).not.toBeInTheDocument()

  fireEvent.click(queryByText(/Generate Id/i))
  expect(queryByText('ID-fake-id')).toBeInTheDocument()
})