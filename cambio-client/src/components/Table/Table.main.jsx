import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Board } from '../Board'
import { Chat } from '../Chat'

const Table = (props) => {
  return (
    <main className="table-container">
      <Board />
      <Chat/>
    </main>
  )
}

export default Table
