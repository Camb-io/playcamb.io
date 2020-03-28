import {
    START_GAME,
    STARTING_GAME
} from './types'

const initialState = {
    players: null,
    loading: false
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