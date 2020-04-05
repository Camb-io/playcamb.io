import React from 'react'
import { Card } from '../Card'

const Penalty = ({ cards }) => {

  return (
    <div className="penalty">
      {cards?.map((card, index) => (
        <Card 
          key={card.rank + card.suit}
          card={card} 
          offset={`${index * 50}px`}
        />
      ))}
    </div>
  )
}

export default Penalty