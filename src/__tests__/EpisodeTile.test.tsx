import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EpisodeTile from '../components/EpisodeTile';
import '@testing-library/jest-dom'


test('Render text elements', () => {
  const episode = 'S04E01';
  const name = 'Edge of Tomorty: Rick, Die, Rickpeat';
  const air_date = 'November 10, 2019';
  const name_color = '#123456';

  render(
    <Router>
      <EpisodeTile episode={episode} name={name} air_date={air_date} name_color={name_color} />
    </Router>
  );

  const episodeNameElement = screen.getByText(episode);
  const titleElement = screen.getByText(name);
  const descriptionElement = screen.getByText(air_date);

  expect(episodeNameElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('Render link element', () => {
  const episode = 'S04E01';
  const name = 'Edge of Tomorty: Rick, Die, Rickpeat';
  const air_date = 'November 10, 2019';
  const name_color = '#123456';

  render(
    <Router>
      <EpisodeTile episode={episode} name={name} air_date={air_date} name_color={name_color} />
    </Router>
  );

  const linkElement = screen.getByRole('link', { name: name });

  expect(linkElement).toHaveAttribute('href', `/characters/${episode}`);
});