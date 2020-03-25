import React from 'react';
import { render, wait, act } from '@testing-library/react';
import { ScrollExample } from './ScrollExample';

test('set the min-height to be half of the scroll disance when scrolled', async () => {
  const { getByText } = render(<ScrollExample />);
  const example = getByText(/i get taller as you/i);

  expect(example.getAttribute('style')).toMatch(/min-height: 0/)

  await act( async() => {
    window.scrollY = 50
    window.dispatchEvent(new Event('scroll'))

    await wait(() => expect(example.getAttribute('style')).toMatch(/min-height: 25px/))
  })
});

test('remove the scroll listener when unmounting', () => {
  const { unmount } = render(<ScrollExample />);
  
  jest.spyOn(window, 'removeEventListener')

  unmount()
  expect(window.removeEventListener).toBeCalledWith('scroll', expect.any(Function))
})
