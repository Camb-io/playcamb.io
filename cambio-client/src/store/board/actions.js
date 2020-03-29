import { action } from 'typesafe-actions'
import { mockFetch as fetch } from '../../mocks/fetch'
import {
    JOIN_GAME,
    PLAYER_READY,
    START_GAME,
    STARTING_GAME
} from './types'

export function joinTable(slug, name) {
    return dispatch => {
        fetch(`tables/${slug}/join`, {
            method: "POST",
            body: JSON.stringify({ name })
        })
            .then(r => r.json())
            .then(player => {
                dispatch(action(JOIN_GAME, player))
            })
    }
}

// export const joinTable = (slug, name) => dispatch => {
//     fetch(`tables/${slug}/join`, {
//         method: "POST",
//         body: JSON.stringify({ name })
//     })
//         .then(r => r.json())
//         .then(player => {
//             dispatch(action(JOIN_GAME, player))
//         })
// }

export const playerReady = (slug, name) => dispatch => {
    fetch(`tables/${slug}/ready`, {
        method: "PATCH",
        body: JSON.stringify({ name })
    })
        .then(r => r.json())
        .then(player => {
            dispatch(action(PLAYER_READY, player))
        })
}

export const startGame = slug => dispatch => {
    dispatch(action(STARTING_GAME))

    fetch(`/tables/${slug}/deal`)
        .then(r => r.json())
        .then(players => {
            const playerObj = players.reduce((obj, player) => {
                obj[player.name] = {
                    ...player
                }
                return obj
            }, {})
            dispatch(action(START_GAME, playerObj))
        })
}