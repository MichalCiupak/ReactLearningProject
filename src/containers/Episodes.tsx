import { useEffect, useState } from 'react';
import { IEpisode, IEpisodeApiResponse } from '../utils/interfaces';
import { request } from 'graphql-request';

const Episodes = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const query = ` {
        episodes(page: 1, filter: { episode: "S04" }) {
          results {
            id,
            episode,
            name,
            air_date
          }
        }
      }`    
    
      try {
        const data: IEpisodeApiResponse = await request('https://rickandmortyapi.com/graphql', query);
        setEpisodes(data.episodes.results);

      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();

    return () => {
    };
  }, []);
  return (
    <div>{episodes.map(eps => (
      <div>
        {eps.name}
      </div>
    ))}</div>
  )
}

export default Episodes
