import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Проверка рендера страницы', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add/i);
  expect(linkElement).toBeInTheDocument();
});