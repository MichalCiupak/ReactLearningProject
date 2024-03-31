import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { charactersQuery, url } from '../utils/query'
import { ICharacter, ICharacterApiResponse } from '../utils/interfaces';
import "./Containers.css"
import PortalImg from "../assets/portal.png"
import Footer from '../components/Footer';
import Header from '../components/Header';
import AttributeTile from '../components/AttributeTile';
import ReturnButton from '../components/ReturnButton';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';


const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  let { episode } = useParams();

  let episodeIndex: number;

  if (episode !== undefined) {
    episodeIndex = parseInt(episode.split('E')[1], 10); 
  } else {
    episodeIndex = 1;
    episode = "episode"
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = charactersQuery(episode || "")
      try {
        const data: ICharacterApiResponse = await request(url, query);
        setCharacters(data.episodes.results[0].characters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [episode]);

  return (
    <main className='main_container'>
      <Header/>
      <div className='main_content'>
        <div className='title_and_image'>
          <ReturnButton destination='/' text={'Episodes'}/>
          <div className='title_container'>
            <p className='description_paragraph-characters'>
              Characters of the <strong>{episodeIndex}th</strong><br/>episode of the <strong> 4th </strong><br/>season of the series<br/> <span className='title_text'>Rick and Morty</span>
            </p>
          </div>
          <div className='image_container'>
            <img className='image' src={PortalImg} alt="Portal image"/>
          </div>
        </div>
        <div className='components_list'>
          {characters?.length > 0 ? (characters.map((char, index) => (
            <div key={index}>
              <AttributeTile  isLink={true} destination={`/characterdetails/${episode}/${char.id}`} title={char.name} description={char.species}/>
              {index !== characters.length - 1 && <div className='line-characters'></div>}
            </div>  
          ))) : (
            <Spinner message={'Loading the characters'}/>
          )}
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Characters
