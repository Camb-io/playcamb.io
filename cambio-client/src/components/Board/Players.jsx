import React from 'react';
import { CurrentPlayerControls } from '../CurrentPlayer'
import { Hand } from '../Hand';


const Players = (props) => {

  const renderPlayers = () => {
    return props.players.map(player => {
      if (player.name === props.currentUser){
        return <div className="current-player">
          current player
          <Hand player={player}/> 
          <CurrentPlayerControls/>
          </div>
      } else {
        return <Hand player={player} className="player"/>
      }
    })
  }
  
  return (
    <div className="players">
      {renderPlayers()}
    </div>
  )

}

export default Players;

