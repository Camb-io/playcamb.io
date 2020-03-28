import React from 'react';
import { DiscardDeck } from '../DiscardDeck';
import { DrawDeck } from '../DrawDeck';
import { CurrentCard } from '../CurrentCard';

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
