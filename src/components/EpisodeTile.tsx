import React from 'react'
import AttributeTile from './AttributeTile';
import "./EpisodeTile.css"

type Props = {
    episode: string;
    name: string;
    air_date: string;
    name_color: string;
}

const EpisodeTile: React.FC<Props> = ({episode, name, air_date, name_color}) => {
  return (
    <div className='episode_container'>
      <span className='episode_name'>{episode}</span>
      <AttributeTile isLink={true} destination={`/characters/${episode}`} title={name} description={air_date} color={name_color}/>
    </div>
  )
}

export default EpisodeTile
