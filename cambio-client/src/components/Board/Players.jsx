import React from 'react';
import { Hand } from '../Hand';

const Players = (props) => {

  const renderPlayers = () => {
    return props.players.map(player => 
      <Hand 
        key={player.name} 
        player={player} 
        isCurrentPlayer={player.name === props.currentUser} 
      />
    )
  }
  
  return (
    <div className="players">
      {renderPlayers()}
    </div>
  )
}

export default Players;

