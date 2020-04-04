import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as boardSelectors from '../../store/board/selectors'
import * as boardActions from '../../store/board/actions'
import { Decks } from '../Decks'
import  Players  from './Players'

// Hard coded for now
const fakeState = {
  currentUser: "Player2",
  activePlayer: "Player1",
  players: 
    [ {
      name: "Player1",
      cards: {
        bottomLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        bottomRight: { suit: "hearts", rank: "A", visibleTo: [] },
        topLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        topRight: { suit: "hearts", rank: "A", visibleTo: [] },
        penalty1: { suit: "hearts", rank: "10", visibleTo: [] }
      }
    },
    {
      name: "Player2",
      cards: {
        bottomLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        bottomRight: { suit: "hearts", rank: "A", visibleTo: [] },
        topLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        topRight: { suit: "hearts", rank: "A", visibleTo: [] },
        penalty1: { suit: "hearts", rank: "10", visibleTo: [] }
      }
    },
    {
      name: "Player3",
      cards: {
        bottomLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        bottomRight: { suit: "hearts", rank: "A", visibleTo: [] },
        topLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        topRight: { suit: "hearts", rank: "A", visibleTo: [] },
        penalty1: { suit: "hearts", rank: "10", visibleTo: [] }
      }
    },
    {
      name: "Player4",
      cards: {
        bottomLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        bottomRight: { suit: "hearts", rank: "A", visibleTo: [] },
        topLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        topRight: { suit: "hearts", rank: "A", visibleTo: [] },
        penalty1: { suit: "hearts", rank: "10", visibleTo: [] }
      }
    },
    {
      name: "Player5",
      cards: {
        bottomLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        bottomRight: { suit: "hearts", rank: "A", visibleTo: [] },
        topLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        topRight: { suit: "hearts", rank: "A", visibleTo: [] },
        penalty1: { suit: "hearts", rank: "10", visibleTo: [] }
      }
    },
    {
      name: "Player6",
      cards: {
        bottomLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        bottomRight: { suit: "hearts", rank: "A", visibleTo: [] },
        topLeft: { suit: "hearts", rank: "A", visibleTo: [] },
        topRight: { suit: "hearts", rank: "A", visibleTo: [] },
        penalty1: { suit: "hearts", rank: "10", visibleTo: [] }
      }
    }],
  currentDiscardTop: { suit: "hearts", rank: "Jack" },
  drawnCard: { suit: "hearts", rank: "2" },
  matchable: false,
  gameEnding: false,
  gifting: false,

}

const Board = (props) => {
  const players = useSelector(boardSelectors.getPlayers)
  
  console.log(players)

  return (
    <div className="full-board">
      <Players players={fakeState.players.slice(Math.ceil(fakeState.players.length/2))} currentUser={fakeState.currentUser}/>
      <Decks/>
      <Players players={fakeState.players.slice(0, Math.ceil(fakeState.players.length / 2))} currentUser={fakeState.currentUser} />
    </div>
  )
}

export default Board
