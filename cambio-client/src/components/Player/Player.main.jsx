import React from 'react'
import Hand from './Hand'
import Penalty from './Penalty'

const Player = ({ player, isCurrentPlayer = false }) => {
  if (!player) return null;
  
  // penalty card testing
  if (player.cards) {
    player.cards.penalties = [{ rank: "10", suit: "spades" }, { rank: "10", suit: "spades" }, { rank: "10", suit: "spades" }]
  }

  return (
    <div className={`player${isCurrentPlayer ? " current" : ""}`}>
      <h2 className="name">{player.name}</h2>
      <div className="hand">
        <Hand cards={player.cards} />
        <Penalty cards={player.cards?.penalties} />
      </div>
    </div>
  )
}

export default Player