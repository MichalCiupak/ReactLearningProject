import '@testing-library/jest-dom';
import { ICharacter, IEpisode, ILocation, ICharacterDetails, IEpisodeApiResponse, 
ICharacterApiResponse, ICharacterDetailsApiResponse } from '../utils/interfaces';


test('ICharacter interface', () => {
const character: ICharacter = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human'
};

expect(character).toBeDefined();
expect(character.id).toBe(1);
expect(character.name).toBe('Rick Sanchez');
expect(character.species).toBe('Human');
});


test('IEpisode interface', () => {
    const episode: IEpisode = {
      id: 1,
      episode: 'S04E01',
      name: 'Edge of Tomorty: Rick, Die, Rickpeat',
      air_date: '2017-12-02'
    };

    expect(episode).toBeDefined();
    expect(episode.id).toBe(1);
    expect(episode.episode).toBe('S04E01');
    expect(episode.name).toBe('Edge of Tomorty: Rick, Die, Rickpeat');
    expect(episode.air_date).toBe('2017-12-02');
});


test('ILocation interface', () => {
    const location: ILocation = {
      id: 1,
      name: 'Earth'
    };

    expect(location).toBeDefined();
    expect(location.id).toBe(1);
    expect(location.name).toBe('Earth');
});


test('ICharacterDetails interface', () => {
    const location: ILocation = {
      id: 1,
      name: 'Earth'
    };

    const characterDetails: ICharacterDetails = {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive',
      type: 'Human',
      gender: 'Male',
      origin: location,
      location: location,
      image: 'https://rickandmortyapi.com/rick_sanchez.jpeg'
    };

    expect(characterDetails).toBeDefined();
    expect(characterDetails.id).toBe(1);
    expect(characterDetails.name).toBe('Rick Sanchez');
    expect(characterDetails.species).toBe('Human');
    expect(characterDetails.status).toBe('Alive');
    expect(characterDetails.type).toBe('Human');
    expect(characterDetails.gender).toBe('Male');
    expect(characterDetails.origin).toEqual(location);
    expect(characterDetails.location).toEqual(location);
    expect(characterDetails.image).toBe('https://rickandmortyapi.com/rick_sanchez.jpeg');
});


test('IEpisodeApiResponse interface', () => {
  const episodeApiResponse: IEpisodeApiResponse = {
      episodes: {
          results: [
              {
                  id: 1,
                  episode: 'S04E01',
                  name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                  air_date: '2017-12-02'
              },
              {
                  id: 2,
                  episode: 'S04E02',
                  name: 'The Old Man and the Seat',
                  air_date: '2017-12-09'
              }
          ]
      }
  };

  expect(episodeApiResponse).toBeDefined();
  expect(episodeApiResponse.episodes.results.length).toBe(2);
  expect(episodeApiResponse.episodes.results[0].id).toBe(1);
  expect(episodeApiResponse.episodes.results[1].episode).toBe('S04E02');
});


test('ICharacterApiResponse interface', () => {
  const characterApiResponse: ICharacterApiResponse = {
      episodes: {
          results: [
              {
                  characters: [
                      {
                          id: 1,
                          name: 'Rick Sanchez',
                          species: 'Human'
                      },
                      {
                          id: 2,
                          name: 'Morty Smith',
                          species: 'Human'
                      }
                  ]
              }
          ]
      }
  };

  expect(characterApiResponse).toBeDefined();
  expect(characterApiResponse.episodes.results.length).toBe(1);
  expect(characterApiResponse.episodes.results[0].characters.length).toBe(2);
  expect(characterApiResponse.episodes.results[0].characters[0].id).toBe(1);
  expect(characterApiResponse.episodes.results[0].characters[1].name).toBe('Morty Smith');
});


test('ICharacterDetailsApiResponse interface', () => {
  const characterDetailsApiResponse: ICharacterDetailsApiResponse = {
      character: {
          id: 1,
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive',
          type: 'Human',
          gender: 'Male',
          origin: { id: 1, name: 'Earth' },
          location: { id: 1, name: 'Earth' },
          image: 'https://rickandmortyapi.com/rick_sanchez.jpeg'
      }
  };

  expect(characterDetailsApiResponse).toBeDefined();
  expect(characterDetailsApiResponse.character.id).toBe(1);
  expect(characterDetailsApiResponse.character.name).toBe('Rick Sanchez');
  expect(characterDetailsApiResponse.character.species).toBe('Human');
  expect(characterDetailsApiResponse.character.status).toBe('Alive');
  expect(characterDetailsApiResponse.character.type).toBe('Human');
  expect(characterDetailsApiResponse.character.gender).toBe('Male');
  expect(characterDetailsApiResponse.character.origin.id).toBe(1);
  expect(characterDetailsApiResponse.character.location.name).toBe('Earth');
  expect(characterDetailsApiResponse.character.image).toBe('https://rickandmortyapi.com/rick_sanchez.jpeg');
});