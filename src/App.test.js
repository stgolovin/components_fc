import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LEONARD COAT', () => {
  render(<App />);
  const nameElement = screen.getByText(/LEONARD COAT/i);
  expect(nameElement).toBeInTheDocument();
});
