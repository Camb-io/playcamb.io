import React from 'react'
import { useSelector } from 'react-redux'
import * as boardSelectors from '../../store/board/selectors'
import { Decks } from '../Decks'
import { Player }  from '../Player'
import { Controls }  from '../Controls'

const Board = () => {
  const opponents = useSelector(boardSelectors.getOpponentPlayers)
  const currentPlayer = useSelector(boardSelectors.getCurrentPlayer)
  
  return (
    <div className="board">
      <div className="players">
        <Player player={opponents[0]} />
        <Player player={opponents[2]} />
        <Player player={opponents[1]} />
      </div>
      <div class="decks">
        <Decks />
      </div>
      <div className="players">
        <Player player={opponents[3]} />
        <Player player={currentPlayer} isCurrentPlayer={true} />
        <Player player={opponents[4]} />
      </div>
      <div className="controls">
        <Controls />
      </div>
    </div>
  )
}

export default Board
