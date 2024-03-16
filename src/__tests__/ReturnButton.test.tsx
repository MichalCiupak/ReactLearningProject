import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import ReturnButton from '../components/ReturnButton';
import { BrowserRouter as Router } from 'react-router-dom';

test('Render arrow icon', () => {
  const destination = '/';
  const text = 'Episodes';

  render(
    <Router>
      <ReturnButton destination={destination} text={text} />
    </Router>
  );
  
  const arrowIcon = screen.getByTestId('return-button-arrow');
  expect(arrowIcon).toBeInTheDocument();
});


test('Render ReturnButton', () => {
  const destination = '/';
  const text = 'Episodes';

  const props = {
    destination: destination,
    text: text
  };

  render(
    <Router>
      <ReturnButton {...props}/>
    </Router>
  );

  const buttonElement = screen.getByText(text);
  expect(buttonElement).toBeInTheDocument();

  const linkElement = screen.getByRole('link', { name: text });
  expect(linkElement).toHaveAttribute('href', destination);
});


