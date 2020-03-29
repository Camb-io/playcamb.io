import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChatInput, ChatHistory } from './'

const Chat = ({ socket }) => {
  const [chatInput, setChatInput] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.onmessage = (e) => {
      const data = JSON.parse(e.data)
      setMessages([...messages, data])
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
