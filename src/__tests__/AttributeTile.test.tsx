import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AttributeTile from '../components/AttributeTile';
import '@testing-library/jest-dom'


test('Render text elements', () => {
  const title = 'Title example';
  const description = 'Description example';
  const color = '#123456';

  render(<AttributeTile title={title} description={description} color={color} />);

  const titleElement = screen.getByText(title);
  const descriptionElement = screen.getByText(description);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('Render with link', () => {
  const title = 'Title example';
  const description = 'Description example';
  const color = '#123456';
  const destination = '/path';

  render(
    <Router>
      <AttributeTile title={title} description={description} color={color} isLink={true} destination={destination} />
    </Router>
  );

  const linkElement = screen.getByRole('link', { name: title });

  expect(linkElement).toHaveAttribute('href', destination);
});