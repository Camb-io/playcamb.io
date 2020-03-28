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
    <div>
      {beef}
      <button className="board-button" onClick={handleClick} >click me</button>
    </div>
  )
}

export default Board