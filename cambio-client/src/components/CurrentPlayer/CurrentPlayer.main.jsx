import React from 'react';
import { Hand } from '../Hand'
import { CurrentPlayerControls } from '../CurrentPlayerControls'

const CurrentPlayer = () => {

  return (
    <div className="current-player">
      <Hand />
      <CurrentPlayerControls/>
    </div>
  )

}

export default CurrentPlayer;
