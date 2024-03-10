import { useEffect, useState } from 'react';
import { IEpisode, IEpisodeApiResponse } from '../utils/interfaces';
import { request } from 'graphql-request';
import { episodeQuery, url } from '../utils/query'
import Footer from '../components/Footer';
import "./Containers.css"

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
    <div className='main_container'>
      <div>
        {episodes.map(eps => (
          <div>
            {eps.name}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Episodes
