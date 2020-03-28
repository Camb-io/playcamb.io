import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatInput, ChatHistory } from './'

const fakeMessages = []

for (let i=0; i < 50; i++){
  fakeMessages.push({user: "Rishi", text: "Squishykesh", type: "CHAT_MESSAGE"})
}

for (let i=0; i < 50; i++){
  fakeMessages.push({text: "Squishykesh", type: "GAME_MESSAGE"})
}

const Chat = ({ socket }) => {
  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState(fakeMessages)

  useEffect(() => {
    console.log("new useEffect")
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data)
      setMessages([...messages, {user: data.user, text: data.text, type: "CHAT_MESSAGE"}])
    }
  }, [socket, messages]) //useEffect is only ever triggered once

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.send(JSON.stringify({
      user: "Rishi",
      text: chatInput
    }))
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
