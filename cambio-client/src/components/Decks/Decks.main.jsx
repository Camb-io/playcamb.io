import React from 'react';
import { DiscardDeck } from './';
import { DrawDeck } from './';
import { CurrentCard } from './';

const Decks = () => {

  return (
    <div className="deck-area">
      <p>decks live here</p>
      <DiscardDeck />
      <DrawDeck />
      <CurrentCard />
    </div>
  )

}

export default Decks;
