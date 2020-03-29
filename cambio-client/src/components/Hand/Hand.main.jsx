import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
import { Card } from '../Card'

=======
import { Card } from '../Card'

>>>>>>> added current player cards
const Hand = ({ cards }) => {
  const renderPenaltyCards = () =>
    Object.keys(cards)
      .filter(key => key.includes("penalty"))
<<<<<<< HEAD
      .map(key => {
        const card = cards[key]
        return (
          <Card 
            key={card.rank + card.suit}
            card={card} 
          />
        )
      })
>>>>>>> e5e1fbc9d85c4848af4d204b139e175b916883c1
=======
      .map(card => 
        <Card 
          key={card.rank + card.suit}
          card={card} 
        />
      )
>>>>>>> added current player cards

  return (
    <div className="hand">
      <div className="cards">
<<<<<<< HEAD
<<<<<<< HEAD
        {renderCards(hand.cards)}
      </div>
      <div className="penalty">
        {renderCards(hand.penalty)}
=======
        <Card card={cards.topLeft} />
        <Card card={cards.topRight} />
        <Card card={cards.bottomLeft} />
        <Card card={cards.bottomRight} />
      </div>
      <div className="penalty">
        {renderPenaltyCards()}
>>>>>>> e5e1fbc9d85c4848af4d204b139e175b916883c1
=======
        <Card card={cards.topLeft} />
        <Card card={cards.topRight} />
        <Card card={cards.bottomLeft} />
        <Card card={cards.bottomRight} />
      </div>
      <div className="penalty">
        {renderPenaltyCards()}
>>>>>>> added current player cards
      </div>
    </div>
  )
}

export default Hand