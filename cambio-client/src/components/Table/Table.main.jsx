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

  return (
    <main className="table-container">
      <Board />
      <Chat />
    </main>
  )
}

export default Table
