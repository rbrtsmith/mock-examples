import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { TimerExample } from './TimerExample';

jest.useFakeTimers()

test('render text after 1000ms timeout when clicked', () => {
  const { queryByText } = render(<TimerExample />)

  act(() => {
    expect(queryByText(/Hello world/i)).not.toBeInTheDocument()
    fireEvent.click(queryByText(/Set delayed text/i))
    expect(queryByText(/Hello world/i)).not.toBeInTheDocument()
  
    jest.advanceTimersByTime(1000)
    expect(queryByText(/Hello world/i)).toBeInTheDocument()
  })
})