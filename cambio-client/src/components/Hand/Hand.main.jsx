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
            visible={true} card={card} 
          />
        )
      })

  return (
    <div className="hand">
      <div className="cards">
        <Card visible={true} card={cards.topLeft} />
        <Card visible={true} card={cards.topRight} />
        <Card visible={true} card={cards.bottomLeft} />
        <Card visible={true} card={cards.bottomRight} />
      </div>
      <div className="penalty">
        {renderPenaltyCards()}
      </div>
    </div>
  )
}

export default Hand