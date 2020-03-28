import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as tableSelectors from '../../store/table/selectors'
import * as tableActionss from '../../store/table/actions'

const Table = (props) => {
  const dispatch = useDispatch()
  const beef = useSelector(boardSelectors.getBeef)

  const handleClick = () => {
    dispatch(boardActions.setBeef("Delish"))
  }


  return (
    <div>
      {beef}
      <button className="table-button" onClick={handleClick} >click me</button>
    </div>
  )
}

export default Table
