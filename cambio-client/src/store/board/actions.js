import { action } from 'typesafe-actions'
import { mockFetch } from '../../mocks/fetch'
import {
    START_GAME,
    STARTING_GAME
} from './types'

export const startGame = () => dispatch => {
    dispatch(action(STARTING_GAME))

    mockFetch("/deal")
        .then(({ players }) => {
            dispatch(action(START_GAME, players))
        })
}