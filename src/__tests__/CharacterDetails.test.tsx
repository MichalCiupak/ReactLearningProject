import { render, screen } from '@testing-library/react';
import CharacterDetails from '../containers/CharacterDetails';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('graphql-request', () => ({
  request: async () => {
    return {
      character: {id: '1',
        name: 'Rick Sanchez', 
        status: 'Alive', 
        species: 'Human', 
        type: '', 
        gender: 'Male',
        origin: {id: '1', name: 'Earth (C-137)'},
        location: {id: '3', name: 'Citadel of Ricks'},
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      }
    };
  },
}));

test('Render text elements', async () => {
  render(
    <Router>
      <CharacterDetails />
    </Router>
  );

  const nameElement = await screen.findByText('Rick Sanchez')
  const statusElement = await screen.findByText('Alive')
  const speciesElement = await screen.findByText('Human')
  const typeElement = await screen.findByText('-')
  const genderElement = await screen.findByText('Male')
  const originElement = await screen.findByText('Earth (C-137)')
  const locationElement = await screen.findByText('Citadel of Ricks')

  expect(nameElement).toBeInTheDocument()
  expect(statusElement).toBeInTheDocument()
  expect(speciesElement).toBeInTheDocument()
  expect(typeElement).toBeInTheDocument()
  expect(genderElement).toBeInTheDocument()
  expect(originElement).toBeInTheDocument()
  expect(locationElement).toBeInTheDocument()

});


test('Render image', async () => {
  render(
    <Router>
      <CharacterDetails />
    </Router>
  );

  const characterImage = await screen.findByAltText('Character image');

  expect(characterImage).toBeInTheDocument();
});
