import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import Header from '../components/Header';

test('Header text rendering', () => {
  render(<Header/>);
  const linkElement = screen.getByRole("heading", {name: "LOREM IPSUM"})
  expect(linkElement).toBeInTheDocument();
});