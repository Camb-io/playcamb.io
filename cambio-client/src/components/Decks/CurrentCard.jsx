import React from 'react';
import { Card } from '../Card'
const CurrentCard = () => {

  return (
    <div className="current-card-area">
      <Card card={{ rank: "2", suit: "clubs", visible: true }} />
    </div>
  )

}

export default CurrentCard;
