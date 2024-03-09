import { useEffect, useState } from 'react';
import { IEpisode, IEpisodeApiResponse } from '../utils/interfaces';
import { request } from 'graphql-request';
import { episodeQuery, url } from '../utils/query'

const Episodes = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const query = episodeQuery("S04")
    
      try {
        const data: IEpisodeApiResponse = await request(url, query);
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
