import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as boardSelectors from '../../store/board/selectors'
import * as boardActions from '../../store/board/actions'
import TopPlayers from '../TopPlayers/TopPlayers.main'
import Decks from '../Decks/Decks.main'
import BottomPlayers from '../BottomPlayers/BottomPlayers.main'


const Board = (props) => {
  const dispatch = useDispatch()
  const beef = useSelector(boardSelectors.getBeef)

  const handleClick = () => {
    dispatch(boardActions.setBeef("Delish"))
  }


  return (
    <div className="full-board">
      <TopPlayers/>
      <Decks/>
      <BottomPlayers/>
    </div>
  )
}

export default Board
