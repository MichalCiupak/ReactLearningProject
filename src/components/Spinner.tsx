import React from 'react';
import {TailSpin} from 'react-loader-spinner';
import "./Spinner.css"

type Props = {
  message: string;
}

const Spinner: React.FC<Props> = ({message}) => {
  return (
    <div className='spinner_container'>
      <div className='spinner_content'>
        <TailSpin color="#00BFFF" height={70} width={200}/>
        <p className='spinner_message'>{message}</p>
      </div>
    </div>
  )
}

export default Spinner