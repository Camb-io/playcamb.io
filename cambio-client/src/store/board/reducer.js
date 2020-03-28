import {
    START_GAME,
    STARTING_GAME
} from './types'

const initialState = {
    loading: false,
    currentUser: null,
    activePlayer: null,
    players: null,
    currentDiscardTop: null,
    drawnCard: null,
    matchable: false,
    gameEnding: false,
    gifting: false,
}

const reducerActions = {
    [START_GAME](state, action) {
        return {
            ...state,
            players: action.payload,
            loading: false
        }
    },
    [STARTING_GAME](state) {
        return {
            ...state,
            loading: true
        }
    }
}

const playersReducer = (state = initialState, action) => {
    return reducerActions[action.type] ? reducerActions[action.type](state, action) : state
}

export default playersReducer