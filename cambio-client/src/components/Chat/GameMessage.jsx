import React from 'react'

const GameMessage = ({ message }) => {
  return (
    <span className="chat-message game-message">
      {message.text}
    </span>
  )
}

export default GameMessage