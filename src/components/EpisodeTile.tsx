import React from 'react'
import AttributeTile from './AttributeTile';
import "./EpisodeTile.css"

type Props = {
    episode: string;
    name: string;
    air_date: string;
}

const EpisodeTile: React.FC<Props> = ({episode, name, air_date}) => {
  return (
    <div className='episode_container'>
      <span className='episode_name'>{episode}</span>
      <AttributeTile isLink={true} destination={`/characters/${episode}`} title={name} description={air_date}/>
    </div>
  )
}

export default EpisodeTile
