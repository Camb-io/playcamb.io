import React from 'react';
import { CurrentPlayerControls } from '../CurrentPlayer'
import { Hand } from '../Hand';


const Players = (props) => {

  const renderPlayers = () => {
    return props.players.map(player => (
     <Hand cards={player.cards} className="player"/>
    ))
  }
  
  return (
    <>
      {renderPlayers()}
    </>
  )

}

export default Players;

