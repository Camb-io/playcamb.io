import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TopPlayers } from './'
import { Decks } from '../Decks'
import { BottomPlayers } from './'
import * as boardSelectors from '../../store/board/selectors'
import * as boardActions from '../../store/board/actions'

const Board = (props) => {
  const dispatch = useDispatch()
  const players = useSelector(boardSelectors.getPlayers)
  
  useEffect(() => {
    dispatch(boardActions.startGame())
  }, [])

  console.log(players)

  return (
    <div className="full-board">
      <TopPlayers/>
      <Decks/>
      <BottomPlayers/>
    </div>
  )
}

export default Board
