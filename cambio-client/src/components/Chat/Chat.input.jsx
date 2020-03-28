import React from 'react'

const ChatInput = ({ input, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="chat-input-box">
      <input value={input} onChange={handleChange} />
      <input value="Send" type="submit" />
    </form>
  )
}

export default ChatInput