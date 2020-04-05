import React from 'react';
import { DiscardDeck } from './';
import { DrawDeck } from './';
import { CurrentCard } from './';

const Decks = () => {

  return (
    <>
      <DiscardDeck />
      <DrawDeck />
      <CurrentCard />
    </>
  )

}

export default Decks;
