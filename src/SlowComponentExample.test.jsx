import React from 'react';
import { render } from '@testing-library/react';

import { SlowComponentExample } from './SlowComponentExample';

jest.mock('./FakeSlowReactComponent', () => ({
  FakeSlowReactComponent: () => <div>I'm actually really fast</div>,
}))

test('renders the slow component', async () => {
  const { getByText } = render(<SlowComponentExample />)
  expect(getByText(/I'm actually really fast/i))
});
