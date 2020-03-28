import React from 'react';
import { DiscardDeck } from '../DiscardDeck';
import { DrawDeck } from '../DrawDeck'

const Decks = () => {

  return (
    <div className="deck-area">
      <p>decks live here</p>
      <DiscardDeck />
      <DrawDeck />
    </div>
  )

}

export default Decks;
