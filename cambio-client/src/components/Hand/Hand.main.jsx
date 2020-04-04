import React from 'react'
import { Card } from '../Card'

const Hand = ({ cards }) => {
  const renderPenaltyCards = () =>
    Object.keys(cards)
      .filter(key => key.includes("penalty"))
      .map(key => {
        const card = cards[key]
        return (
          <Card 
            key={card.rank + card.suit}
            card={card} 
          />
        )
      })

  return (
    <div className="hand">
      <div className="cards">
        <Card card={cards.topLeft} />
        <Card card={cards.topRight} />
        <Card card={cards.bottomLeft} />
        <Card card={cards.bottomRight} />
      </div>
      <div className="penalty">
        {renderPenaltyCards()}
      </div>
    </div>
  )
}

export default Hand