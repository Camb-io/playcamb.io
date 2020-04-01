import {
    JOIN_GAME,
    PLAYER_READY,
    START_GAME,
    STARTING_GAME
} from './types'

const initialState = {
    loading: false,
    currentUser: "P1",
    activePlayer: null,
    players: null,
    currentDiscardTop: null,
    drawnCard: null,
    matchable: false,
    gameEnding: false,
    gifting: false,
}

const reducerActions = {
    [JOIN_GAME](state, action) {
        return {
            ...state,
            players: {
                ...state.players,
                [action.payload.name]: {
                    ...action.payload
                }
            }
        }
    },
    [PLAYER_READY](state, action) {
        return {
            ...state,
            players: {
                ...state.players,
                [action.payload.name]: {
                    ...state.players[action.payload.name],
                    ready: true
                }
            }
        }
    },
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