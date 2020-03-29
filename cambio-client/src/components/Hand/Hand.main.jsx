import React from 'react'

const Hand = (props) => {
  // this will likely come from props from the Board, hard coding for now
  const hand = {
    cards: ["AS", "10D", "JH", "2C"],
    penalty: ["3S", "5C"]
  }

  console.log(props.player.cards)
  const renderCards = cards =>
    // this should render a Card component 
    cards.map(card => (
      <div className="card" key={card}>
        {card}
      </div>
    ))

  return (
    <div className="hand">
      <div className="cards">
        {renderCards(hand.cards)}
      </div>
      <div className="penalty">
        {renderCards(hand.penalty)}
      </div>
    </div>
  )
}

export default Hand