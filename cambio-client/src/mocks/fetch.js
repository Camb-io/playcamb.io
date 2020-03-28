import { players as allPlayers, deck } from './data'

const mockFetch = (url, options) => {
  return new Promise((resolve, reject) => {
    const router = () => {
      switch (url) {
        case "/deal":
          return deal()
        default:
          return error()
      }
    }

    setTimeout(router, 500)

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

      return respond({
        ok: true,
        status: 200,
        data: { players }
      })
    }

    const error = () => resolve({
      status: 400, text: "woops!"
    })

    // helpers
    const respond = ({ ok, status, data }) => {
      const body = JSON.stringify(data)
      resolve({
        ok,
        status,
        body,
        json() {
          return new Promise((resolve) => resolve(JSON.parse(body)))
        }
      })
    }

  })
}

export { mockFetch }