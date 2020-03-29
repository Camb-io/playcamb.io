import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Board } from '../Board'
import { Chat } from '../Chat'
import * as boardActions from '../../store/board/actions'

const Table = (props) => {
  console.log(props);
  const { slug } = props.match.params

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(boardActions.joinTable(slug, "P1"))
    dispatch(boardActions.joinTable(slug, "P2"))
    dispatch(boardActions.joinTable(slug, "P3"))
    dispatch(boardActions.playerReady(slug, "P2"))
    dispatch(boardActions.playerReady(slug, "P3"))
    // dispatch(boardActions.startGame(slug))
  }, [dispatch, slug])

  // useEffect(() => {
  // }, [dispatch, slug])

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
