import React from 'react'
import { Link } from 'react-router-dom';
import "./AttributeTile.css"

type Props = {
    title: string;
    description: string;
    destination?: string;
    isLink?: boolean;
}

const AttributeTile: React.FC<Props> = ({isLink, destination, title, description}) => {
  return (
    <div className='container'>
      <div className="attribute_name">
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
