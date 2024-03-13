import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { charactersQuery, url } from '../utils/query'
import { ICharacter, ICharacterApiResponse } from '../utils/interfaces';
import { useParams } from 'react-router-dom';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const { episode } = useParams();

  useEffect(() => {
    const fetchEpisodes = async () => {
      const query = charactersQuery(episode || "")
      try {
        const data: ICharacterApiResponse = await request(url, query);
        setCharacters(data.episodes.results[0].characters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchEpisodes();

    return () => {
    };
  }, [episode]);

  return (
    <div>
      {characters.map(character => (
        <div>
          {character.name}
        </div>))}
    </div>
  )
}

export default Characters
