import React from 'react';
import { Card } from '../Card'

const Decks = () => {

  return (
    <div className="deck-area">
      <Card card={{visible: false}} />
      <Card card={{visible: false}} />
      <Card card={{visible: false}} />
    </div>
  )

}

export default Decks;
