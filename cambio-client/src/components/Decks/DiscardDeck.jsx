import React from 'react';
import { Card } from '../Card'

const DiscardDeck = () => {

  return (
    <div className="discarddeck-area">
      <Card card={{ rank: "5", suit: "diamonds", visible: true }} />
    </div>
  )

}

export default DiscardDeck;
