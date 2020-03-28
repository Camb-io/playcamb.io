import { action } from 'typesafe-actions'
import { mockFetch } from '../../mocks/fetch'
import {
    START_GAME,
    STARTING_GAME
} from './types'

export const startGame = (slug) => dispatch => {
    dispatch(action(STARTING_GAME))

    mockFetch(`/tables/${slug}/deal`)
        .then(r => r.json())
        .then(({ players }) => {
            dispatch(action(START_GAME, players))
        })
}