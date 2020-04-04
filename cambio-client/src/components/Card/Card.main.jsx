import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Card = ({ card: { suit, rank }, visible }) => {
  if (visible) {
    return <CardFront suit={suit} rank={rank} />
  } else {
    return <CardBack />
  }
}

export default Card