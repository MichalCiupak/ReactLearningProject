import React from 'react'
import { Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import "./ReturnButton.css"

type Props = {
    destination: string;
    text: string;
}

const ReturnButton: React.FC<Props> = ({destination, text}) => {
  return (
    <div className='button_container'>
      <Link className='button_link' to={destination}>
        <div className='link_wrapper'>
          <RiArrowGoBackLine data-testid='return-button-arrow' className='back_arrow_ico' />
          <div className='button_text'>{text}</div>
        </div>
      </Link>
    </div>
  )
}

export default ReturnButton
