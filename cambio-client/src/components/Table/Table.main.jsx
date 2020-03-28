import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Board } from '../Board'
import { Chat } from '../Chat'
import * as boardActions from '../../store/board/actions'

const Table = (props) => {
  const { slug } = props.match.params
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(boardActions.startGame(slug))
  }, [])

  return (
    <main className="table-container">
      <Board />
      <Chat />
    </main>
  )
}

export default Table
