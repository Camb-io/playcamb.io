import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Board } from '../Board'
import { Chat } from '../Chat'

const Table = (props) => {
  // Set Up connection to chat
  const wsUrl = `ws://127.0.0.1:8000/chat`
  const socket = new WebSocket(wsUrl)
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: "ENTER_TABLE"
    }))
  }
  socket.onclose = () => {
    socket.send(JSON.stringify({
      type: "LEAVE_TABLE"
    }))
  }

  return (
    <main className="table-container">
      <Board />
      <Chat socket={socket}/>
    </main>
  )
}

export default Table
