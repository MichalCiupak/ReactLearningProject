import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import Footer from '../components/Footer';

test('Footer text rendering', () => {
  render(<Footer/>);
  const linkElement = screen.getByRole("heading", {name: "LOREM IPSUM ©2021"})
  expect(linkElement).toBeInTheDocument();
});