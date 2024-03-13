import { render, screen } from '@testing-library/react';
import Episodes from '../containers/Episodes';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('graphql-request', () => ({
  request: async () => {
    return {
      episodes: {
        results: [
          { id: 1, episode: 'S04E01', name: 'Edge of Tomorty: Rick, Die, Rickpeat', air_date: 'November 10, 2019' },
          { id: 2, episode: 'S04E02', name: 'The Old Man and the Seat', air_date: 'November 17, 2019' },
        ],
      },
    };
  },
}));


test('Render text elements', async () => {
  render(
    <Router>
      <Episodes />
    </Router>
  );

  const episodeElement = await screen.findByText('S04E01')
  const nameElement = await screen.findByText('Edge of Tomorty: Rick, Die, Rickpeat')
  const airDateElement = await screen.findByText('November 10, 2019')

  expect(episodeElement).toBeInTheDocument()
  expect(nameElement).toBeInTheDocument()
  expect(airDateElement).toBeInTheDocument()
});


test('Render links', async () => {
  render(
    <Router>
      <Episodes />
    </Router>
  );

  const firstLinkElement = await screen.findByRole('link', { name: 'Edge of Tomorty: Rick, Die, Rickpeat' });
  const secondLinkElement = await screen.findByRole('link', { name: 'The Old Man and the Seat' });
  expect(firstLinkElement).toHaveAttribute('href', '/characters/S04E01');
  expect(secondLinkElement).toHaveAttribute('href', '/characters/S04E02');
});
