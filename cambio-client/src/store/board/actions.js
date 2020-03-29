import { action } from 'typesafe-actions'
import { mockFetch as fetch } from '../../mocks/fetch'
import {
    START_GAME,
    STARTING_GAME
} from './types'

export const joinTable = (slug, name) => dispatch => {
    fetch(`tables/${slug}/join`, {
        method: "POST",
        body: JSON.stringify({ name })
    })
        .then(r => r.json())
        .then(console.log)
}

export const startGame = slug => dispatch => {
    dispatch(action(STARTING_GAME))

    fetch(`/tables/${slug}/deal`)
        .then(r => r.json())
        .then(({ players }) => {
            const playerObj = players.reduce((obj, player) => {
                obj[player.name] = {
                    ...player
                }
                return obj
            }, {})
            dispatch(action(START_GAME, playerObj))
        })
}