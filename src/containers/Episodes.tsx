import { useEffect, useState } from 'react';
import { IEpisode, IEpisodeApiResponse } from '../utils/interfaces';
import { request } from 'graphql-request';
import { episodeQuery, url } from '../utils/query'
import PortalImg from "../assets/portal.png"
import Footer from '../components/Footer';
import Header from '../components/Header';
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
    <main className='main_container'>
      <Header/>
      <div className='main_content'>
        <div className='title_and_image'>
          <div className='title_container'>
            <p className='main_text_episode'>
              Episodes of the <strong>4th</strong><br/>season of the series<br/> <span className='title_text'>Rick and Morty</span>
            </p>
          </div>
          <div className='image_container'>
            <img className='image' src={PortalImg} alt="Portal image"/>
          </div>
        </div>
        <div className='episode_list'>
          {episodes.map(episode => (
            <div>
              {episode.air_date}
              
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Episodes
