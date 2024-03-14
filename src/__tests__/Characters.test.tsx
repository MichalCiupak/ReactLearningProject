import { render, screen } from '@testing-library/react';
import Characters from '../containers/Characters';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('graphql-request', () => ({
  request: async () => {
    return {
      episodes: {
        results: [
          { characters: [
            {id: '1', name: 'Rick Sanchez', species: 'Human'},
            {id: '2', name: 'Morty Smith', species: 'Human'},
            {id: '3', name: 'Summer Smith', species: 'Human'},
          ], 
          },
        ],
      },
    };
  },
}));


test('Render text elements', async () => {
  render(
    <Router>
      <Characters />
    </Router>
  );

  const nameElementRick = await screen.findByText('Rick Sanchez')
  const nameElementMorty = await screen.findByText('Morty Smith')
  const nameElementSummer = await screen.findByText('Summer Smith')


  expect(nameElementRick).toBeInTheDocument()
  expect(nameElementMorty).toBeInTheDocument()
  expect(nameElementSummer).toBeInTheDocument()
});


test('Render links', async () => {
  render(
    <Router>
      <Characters />
    </Router>
  );

  const linkElementRick = await screen.findByRole('link', { name: 'Rick Sanchez' });
  const linkElementMorty = await screen.findByRole('link', { name: 'Morty Smith' });
  const linkElementSummer = await screen.findByRole('link', { name: 'Summer Smith' });
  expect(linkElementRick).toHaveAttribute('href', '/characterdetails/episode/1');
  expect(linkElementMorty).toHaveAttribute('href', '/characterdetails/episode/2');
  expect(linkElementSummer).toHaveAttribute('href', '/characterdetails/episode/3');
});
