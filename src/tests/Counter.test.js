// Import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Ensure the Counter header is rendered
  const headerElement = screen.getByText(/Counter/i);
  expect(headerElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Verify the initial count is 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Simulate clicking the + button and check the count
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Simulate clicking the - button and check the count
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
});
