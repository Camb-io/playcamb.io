import React from 'react';
import { CurrentPlayerControls } from '../CurrentPlayer'
import { Hand } from '../Hand';


const Players = (props) => {

  const renderPlayers = () => {
    return props.players.map(player => {
<<<<<<< HEAD
      if (player.name === props.currentUser){
        return <div className="current-player">
          current player
          <Hand player={player}/> 
          <CurrentPlayerControls/>
          </div>
      } else {
        return <Hand player={player} className="player"/>
=======
      console.log(player)
      if (player.name === props.currentUser){
        return <div className="current-player">
          current player
          <Hand cards={player.cards}/> 
          <CurrentPlayerControls/>
          </div>
      } else {
        return <Hand cards={player.cards} className="player"/>
>>>>>>> e5e1fbc9d85c4848af4d204b139e175b916883c1
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

