import React from 'react'

const GameMessage = ({ message }) => {
  const getMessageText = (message) => {
    if (message.type === "ENTER_TABLE") {
      return `${message.user} has entered the table.`
    }
  }


  return (
    <span className="chat-message game-message">
      {getMessageText(message)}
    </span>
  )
}

export default GameMessage
