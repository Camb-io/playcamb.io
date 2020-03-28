import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatInput, ChatHistory } from './'

const fakeMessages = []

for (let i=0; i < 50; i++){
  fakeMessages.push({user: "Rishi", text: "Squishykesh", type: "CHAT_MESSAGE"})
}

for (let i=0; i < 50; i++){
  fakeMessages.push({text: "Squishykesh", type: "GAME_MESSAGE"})
}

const Chat = (props) => {

  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState(fakeMessages)

  const handleSubmit = (e) => {
    e.preventDefault()



    setMessages([...messages, {user: "Rishi", text: chatInput, type: "CHAT_MESSAGE"} ])
    setChatInput("")
  }

  const handleChange = (e) => {
    setChatInput(e.target.value)
  }

  return (
    <main className="chat-container">
      <ChatHistory messages={messages} />
      <ChatInput input={chatInput} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </main>
  )
}

export default Chat