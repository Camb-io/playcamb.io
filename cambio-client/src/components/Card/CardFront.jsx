import React from 'react'

const CardFront = (props) => {
  const card = {
    rank: 10,
    suit: "&hearts;"
  }

  return (
    <div className="card front">
      <div className="top">
        <span className="rank">{card.rank}</span>
        <span className="suit">{card.suit}</span>
      </div>
      <div className="middle">
        <span className="suit">{card.suit}</span>
      </div>
      <div className="bottom">
        <span className="rank">{card.rank}</span>
        <span className="suit">{card.suit}</span>
      </div>
    </div>
  )
}

export default CardFront