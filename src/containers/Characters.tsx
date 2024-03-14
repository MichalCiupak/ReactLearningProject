import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { charactersQuery, url } from '../utils/query'
import { ICharacter, ICharacterApiResponse } from '../utils/interfaces';
import "./Containers.css"
import PortalImg from "../assets/portal.png"
import Footer from '../components/Footer';
import Header from '../components/Header';
import AttributeTile from '../components/AttributeTile';
import { useParams } from 'react-router-dom';


const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const { episode } = useParams();

  let episodeIndex: number;

  if (episode !== undefined) {
    episodeIndex = parseInt(episode.split('E')[1], 10); 
  } else {
    episodeIndex = 1;
  }

  useEffect(() => {
    const fetchEpisodes = async () => {
      const query = charactersQuery(episode || "")
      try {
        const data: ICharacterApiResponse = await request(url, query);
        setCharacters(data.episodes.results[0].characters);
        console.log(data)
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchEpisodes();

    return () => {
    };
  }, [episode]);

  return (
    <main className='main_container'>
      <Header/>
      <div className='main_content'>
        <div className='title_and_image'>
          <div className='title_container'>
            <p>
              Characters of the <strong>{episodeIndex}th</strong><br/>episode of the <strong> 4th </strong><br/>season of the series<br/> <span className='title_text'>Rick and Morty</span>
            </p>
          </div>
          <div className='image_container'>
            <img className='image' src={PortalImg} alt="Portal image"/>
          </div>
        </div>
        <div className='components_list'>
          {characters.map((char, index) => (
            <div>
              <AttributeTile isLink={true} destination={`/characterdetails/${episode}/${char.id}`} title={char.name} description={char.species} color={index % 2 === 1 ? '#BDD800' : '#00BDD4' }/>
            </div>  
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Characters
