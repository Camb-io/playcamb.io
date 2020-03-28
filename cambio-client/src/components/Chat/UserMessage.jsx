import React from 'react'

const UserMessage = ({ message }) => {
  return (
    <span className="chat-message user-message">
      {message.user}: {message.text}
    </span>
  )
}

export default UserMessage