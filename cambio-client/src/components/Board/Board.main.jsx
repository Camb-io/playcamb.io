import React from 'react'
import { useSelector } from 'react-redux'
import * as boardSelectors from '../../store/board/selectors'
import { Decks } from '../Decks'
import  Players  from './Players'

const Board = () => {
  const players = useSelector(boardSelectors.getPlayers)
  
  if (players?.length) {
    return (
      <div className="full-board">
        <Players players={players.slice(Math.ceil(players.length/2))} currentUser="P1"/>
        <Decks/>
        <Players players={players.slice(0, Math.ceil(players.length / 2))} currentUser="P1" />
      </div>
    )
  } else {
    return null
  }
}

export default Board
