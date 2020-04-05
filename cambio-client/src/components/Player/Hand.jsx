import React from 'react'
import { Card } from '../Card'

const Hand = ({ cards }) => {
  if (!cards) return null;

  return (
    <div className="cards">
      <Card card={cards.topLeft} />
      <Card card={cards.topRight} />
      <Card card={cards.bottomLeft} />
      <Card card={cards.bottomRight} />
    </div>
  )
}

export default Hand