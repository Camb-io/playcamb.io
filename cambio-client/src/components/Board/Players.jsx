import React from 'react';
import { CurrentPlayerControls } from '../CurrentPlayer'
import { Hand } from '../Hand';


const Players = (props) => {

  const renderPlayers = () => {
    return props.players.map(player => {
      console.log(player)
      if (player.name === props.currentUser){
        return <div className="current-player">
          current player
          <Hand cards={player.cards}/> 
          <CurrentPlayerControls/>
          </div>
      } else {
        return <Hand cards={player.cards} className="player"/>
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

