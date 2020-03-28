import { players as allPlayers, deck } from './data'

const mockFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    setTimeout(router, 500)

    const router = () => {
      switch (url) {
        case "/deal":
          return deal()
        default:
          return error()
      }
    }

    const deal = () => {
      const players = allPlayers.reduce((playerObj, player) => {
        playerObj[player] = {
          bottomLeft: deck.splice(0, 1)[0],
          bottomRight: deck.splice(0, 1)[0],
          topLeft: deck.splice(0, 1)[0],
          topRight: deck.splice(0, 1)[0],
        }
        return playerObj
      }, {})

      return resolve({
        players
      })
    }

    const error = () => resolve({
      status: 400, text: "woops!"
    })

  })
}

export { mockFetch }