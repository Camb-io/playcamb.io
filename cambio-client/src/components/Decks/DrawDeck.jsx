import React from 'react';
import { Card } from '../Card'
const DrawDeck = () => {

  return (
    <div className="drawdeck-area">
      <Card card={{ visible: false }} />
    </div>
  )

}

export default DrawDeck;
