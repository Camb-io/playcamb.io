import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Card = ({ card: { visible, suit, rank }}) => {
  if (visible) {
    return <CardFront suit={suit} rank={rank} />
  } else {
    return <CardBack />
  }
}

export default Card