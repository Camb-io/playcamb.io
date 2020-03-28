import React, { useEffect } from 'react';
import { UserMessage } from "./"
import { GameMessage } from "./"

const ChatHistory = ({ messages }) => {
  useEffect(() => {
    const e = document.querySelector('.chat-history')
    e.scrollTop = e.scrollHeight
  }, [messages])

  return (
    <section className="chat-history">
      {
        messages.map((message,index) => {
          if (message.type === "USER_MESSAGE")
            return <UserMessage key={index} message={message}/>
          else
            return <GameMessage key={index} message={message} />
        })
      }
    </section>
  )
}

export default ChatHistory
