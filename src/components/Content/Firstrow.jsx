import React from 'react';
import './Firstrow.scss';

export const Firstrow = () => {
  return (
    <div className='row-wrapper'>
      <div className='row'>
        <h1>Unique yours</h1>
        <div className='cards'>
              <span className='cards-content'>
                <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe78b3d6a556e3dfe4341e3a5/2/pt/large" alt="" />
                <div className='title'>
                  Daily Mix
                </div>
              </span>
        </div>
      </div>
    </div>
  )
}
