import React from 'react';
import { Hand } from '../Hand'
import { CurrentPlayerControls } from './'

const CurrentPlayer = () => {

  return (
    <div className="current-player">
      current player
      <Hand />
      <CurrentPlayerControls/>
    </div>
  )

}

export default CurrentPlayer;
