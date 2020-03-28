import React from 'react'
import { useSelector } from 'react-redux'
import { TopPlayers } from './'
import { Decks } from '../Decks'
import { BottomPlayers } from './'
import * as boardSelectors from '../../store/board/selectors'

const Board = (props) => {
  const players = useSelector(boardSelectors.getPlayers)
  
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
