import React from 'react';
import { Hand } from '../Hand'
import { CurrentPlayerControls } from './'

// test data
const cards = {
  topLeft: {
    rank: "10",
    suit: "spades",
    visible: false
  },
  topRight: {
    rank: "J",
    suit: "hearts",
    visible: false
  },
  bottomLeft: {
    rank: "2",
    suit: "clubs",
    visible: true
  },
  bottomRight: {
    rank: "3",
    suit: "diamonds",
    visible: true
  },
  penalty1: {
    rank: "7",
    suit: "clubs",
    visible: true
  }
}

const CurrentPlayer = () => {
  return (
    <div className="current-player">
      <Hand cards={cards} />
      <CurrentPlayerControls/>
    </div>
  )

}

export default CurrentPlayer;
