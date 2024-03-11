import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    description: string;
    color: string;
    destination?: string;
    isLink?: boolean;
}

const AttributeTile: React.FC<Props> = ({isLink, destination, title, description, color}) => {
  return (
    <div className='container'>
      <div className="attribute_name" style={{ color: color }}>
        {isLink && destination ? (
          <Link className='link' to={destination}>
            {title}
          </Link>
        ) : (
          <span>{title}</span>
        )}
      </div>
      <div className='attribute_description'>
        {description}
      </div>
    </div>
  )
}

export default AttributeTile
