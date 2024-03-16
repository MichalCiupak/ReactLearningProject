import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { characterDetailsQuery, url } from '../utils/query'
import { ICharacterDetails, ICharacterDetailsApiResponse } from '../utils/interfaces';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AttributeTile from '../components/AttributeTile';
import ReturnButton from '../components/ReturnButton';
import "./Containers.css"
import { useParams } from 'react-router-dom';



const CharacterDetails: React.FC = () => {
  const [characterDetails, setCharacterDetails] = useState<ICharacterDetails>();
  const { characterid } = useParams();
  const { episode } = useParams();

  let id: number;

  if (characterid !== undefined) {
    id = parseInt(characterid); 
  } else {
    id = 1;
  }


  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const query = characterDetailsQuery(id);
      try {
        const data: ICharacterDetailsApiResponse = await request(url, query);
        console.log(data)
        setCharacterDetails(data.character);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchCharacterDetails();

    return () => {
    };
  }, [id]);

  return (
    <div className='main_container'>
      <Header/>
      <div className='main_content'>
        <div className='title_and_image'>
          <ReturnButton destination={`/characters/${episode}`} text={'Characters'}/>
          <div className='title_container'>
            <p className='description_paragraph-character-details'>
              <span className='character_name-character-details'>
                {characterDetails?.name}
              </span>
            </p>
            
          </div>
          <div className='image_container'>
            <img className='image' src={characterDetails?.image} alt="Character image"/>
          </div>
        </div>
        <div className='components_list'>
          <AttributeTile title={characterDetails?.status || '-'} description={"Status"} color={'#00BDD4'}/>
          <div className='line-characters'></div>
          <AttributeTile title={characterDetails?.species || '-'} description={"Species"} color={'#BDD800'}/>
          <div className='line-characters'></div>
          <AttributeTile title={characterDetails?.type || '-'} description={"Type"} color={'#00BDD4'}/>
          <div className='line-characters'></div>
          <AttributeTile title={characterDetails?.gender || '-'} description={"Gender"} color={'#BDD800'}/>
          <div className='line-characters'></div>
          <AttributeTile title={characterDetails?.origin.name || '-'} description={"Origin"} color={'#00BDD4'}/>
          <div className='line-characters'></div>
          <AttributeTile title={characterDetails?.location.name || '-'} description={"Last known location"} color={'#BDD800'}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CharacterDetails
