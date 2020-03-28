import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as boardSelectors from '../../store/board/selectors'
import * as boardActions from '../../store/board/actions'

const Board = (props) => {
  const dispatch = useDispatch()
  const beef = useSelector(boardSelectors.getBeef)

  const handleClick = () => {
    dispatch(boardActions.setBeef("Delish"))
  }


  return (
    <div className="full-board">
      <div className="top-players"></div>
      <div className="deck-area"></div>
      <div className="bottom-players">
        <div className="current-user"></div>
      </div>
    </div>
  )
}

export default Board
