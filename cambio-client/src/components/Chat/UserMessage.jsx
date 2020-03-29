import React from 'react'

const UserMessage = ({ message }) => {
  return (
    <span className="chat-message user-message">
      <span className="user-name">
        {message.user}
      </span>
      : {message.text}
    </span>
  )
}

export default UserMessage
