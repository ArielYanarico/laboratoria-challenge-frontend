import React from 'react';
import { render } from '@testing-library/react';
import './setupTests'

import App from '../App';

test('Given App component Then Nav is in the document', () => {
  // Given
  const { getByText } = render(<App />);
  const navTitle = getByText(/Reactibook/i);
  const homeLink = getByText(/Home/i);
  const loginLink = getByText(/Login/i);

  // Then
  expect(navTitle).toBeInTheDocument();
  expect(homeLink.getAttribute('href')).toEqual('/');
  expect(loginLink.getAttribute('href')).toEqual('/login');
});
