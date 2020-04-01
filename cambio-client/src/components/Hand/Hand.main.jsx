import React from 'react'
import { CurrentPlayerControls } from '../CurrentPlayer'
import { Card } from '../Card'

const Hand = ({ player, isCurrentPlayer }) => {
  // penalty card testing
  if (player.cards) {
    player.cards.penalties = [{ rank: "10", suit: "spades" }, { rank: "10", suit: "spades" }, { rank: "10", suit: "spades" }]
  }

  const renderPenaltyCards = () =>
  player.cards?.penalties?.map(card => (
      <Card 
        key={card.rank + card.suit}
        card={card} 
      />
    ))

  const renderCards = () => {
    if (!player.cards) return null
    const { cards } = player
    return (
      <>
        <div className="cards">
          <Card card={cards.topLeft} />
          <Card card={cards.topRight} />
          <Card card={cards.bottomLeft} />
          <Card card={cards.bottomRight} />
        </div>
        <div className="penalty">
          {renderPenaltyCards()}
        </div>
      </>
    )
  }
}

export default Hand