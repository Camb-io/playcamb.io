import React from 'react';
import { CurrentPlayer } from '../CurrentPlayer'
import { Hand } from '../Hand'


const BottomPlayers = () => {

  return (
    <div className="bottom-players">
      <div className="player-two">player 2
        <Hand/>
      </div>
      <CurrentPlayer />
      <div className="player-six">player 6
        <Hand/>
      </div>
    </div>
  )

}

export default BottomPlayers;
