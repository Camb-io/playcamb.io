import React from 'react';
import { UserMessage } from "./"
import { GameMessage } from "./"

const ChatHistory = ({ messages }) => {
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